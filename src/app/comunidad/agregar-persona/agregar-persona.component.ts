import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { PersonaService } from 'src/app/service/persona.service';
import { Persona } from 'src/app/model/persona.model';

@Component({
  selector: 'app-agregar-persona',
  templateUrl: './agregar-persona.component.html',
  styleUrls: ['./agregar-persona.component.css']
})
export class AgregarPersonaComponent implements OnInit {

  formPersona: FormGroup;

  constructor(
    private personaService: PersonaService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {

    this.formPersona = this.formBuilder.group({
      rut: [],
      nombres: [],
      apPaterno: [],
      apMaterno: [],
      email: [],
      telefono: []
    });
  }

  agregarPersona() {

    console.log('this.formPersona.value');
    console.log(this.formPersona.value);

    let persona: Persona = new Persona();
    persona.run = this.formPersona.controls.rut.value;
    persona.nombres = this.formPersona.controls.nombres.value;
    persona.apellidoPaterno = this.formPersona.controls.apPaterno.value;
    persona.apellidoMaterno = this.formPersona.controls.apMaterno.value;
    persona.correo = this.formPersona.controls.email.value;
    persona.telefono = this.formPersona.controls.telefono.value;

    console.log('persona');
    console.log(persona);

    this.personaService.agregarPersona(persona).subscribe(resp => {
      console.log(resp);
    });
  }

}