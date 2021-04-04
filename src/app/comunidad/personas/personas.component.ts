import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/service/persona.service';
import { Persona } from 'src/app/model/persona.model';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {
  
  personasList: Persona[];
  persona : Persona;

 

  constructor(
    private personaService: PersonaService,
    private router: Router
  ) { }

  ngOnInit() {

    this.personaService.getAll().subscribe(data=>{
      this.personasList = data;
      
    });
  }

  editar(persona : Persona){
    this.personaService.persona = persona;
    this.router.navigate(['main/comunidad/agregar-persona']);
  }

  eliminar(persona : Persona){
    this.personaService.eliminarPersona(persona).subscribe(data=>{
      console.log(data);
      this.personaService.getAll().subscribe(data=>{
        this.personasList = data;
      })
    })
  }

}
