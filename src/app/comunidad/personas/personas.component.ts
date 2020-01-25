import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/service/persona.service';
import { Persona } from 'src/app/model/persona.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {

  personasList: Persona[];

  data: any[] = [
    {name: 'titi', age: 20, email: 'titi@gmail.com'},
    {name: 'mora', age: 58, email: 'morita@hotmail.com'},
    {name: 'zane', age: 38, email: 'zane84@yahoo.com'},
    {name: 'jack', age: 20, email: 'titi@gmail.com'},
    {name: 'tom', age: 58, email: 'morita@hotmail.com'},
    {name: 'jenny', age: 38, email: 'zane84@yahoo.com'},
    {name: 'lars', age: 20, email: 'titi@gmail.com'},
    {name: 'dave', age: 58, email: 'morita@hotmail.com'},
    {name: 'jason', age: 38, email: 'zane84@yahoo.com'}
  ];

  constructor(
    private personaService: PersonaService,
    private router: Router
  ) { }

  ngOnInit() {

    this.personaService.getAll().subscribe(data=>{
      this.personasList = data;
    });
  }

}
