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
      idPersona:[],
      run: [],
      nombres: [],
      apellidoPaterno: [],
      apellidoMaterno: [],
      email: [],
      correo: [],
      telefono : []
    });

    if(this.personaService.persona){
      
        this.formPersona.patchValue(this.personaService.persona);
  
    }
  }

  agregarPersona() {

    console.log('this.formPersona.value');
    console.log(this.formPersona.value);

    let persona:Persona= new Persona();
    persona.idPersona = this.formPersona.controls.idPersona.value;
    persona.run = this.formPersona.controls.run.value;
    persona.nombres = this.formPersona.controls.nombres.value;
    persona.apellidoPaterno = this.formPersona.controls.apellidoPaterno.value;
    persona.apellidoMaterno = this.formPersona.controls.apellidoMaterno.value;
    persona.correo = this.formPersona.controls.correo.value;
    persona.telefono = this.formPersona.controls.telefono.value;

    console.log('persona');
    console.log(persona);

    this.personaService.agregarPersona(persona).subscribe(resp => {
      console.log(resp);
      this.router.navigate(['/main/comunidad/personas']);
    });
  }

}
