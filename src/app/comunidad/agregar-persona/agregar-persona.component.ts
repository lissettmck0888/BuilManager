import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { PersonaService } from 'src/app/service/persona.service';
import { Persona } from 'src/app/model/persona.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-persona',
  templateUrl: './agregar-persona.component.html',
  styleUrls: ['./agregar-persona.component.css']
})
export class AgregarPersonaComponent implements OnInit {

  formPersona: FormGroup;

  constructor(
    private personaService: PersonaService,
    private formBuilder: FormBuilder,
    private router: Router
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
    persona.rut = this.formPersona.controls.rut.value;
    persona.name = this.formPersona.controls.nombres.value;
    persona.lastNameP = this.formPersona.controls.apPaterno.value;
    persona.lastNameM = this.formPersona.controls.apMaterno.value;
    persona.email = this.formPersona.controls.email.value;
    persona.phone = this.formPersona.controls.telefono.value;

    console.log('persona');
    console.log(persona);

    this.personaService.agregarPersona(persona).subscribe(resp => {
      console.log(resp);
      this.router.navigate(['/main/comunidad/personas']);
    });
  }

}
