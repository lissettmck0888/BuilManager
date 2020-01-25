import { Component, OnInit } from '@angular/core';
import { Asignacion } from 'src/app/model/asignacion.model';
import { AsignacionService } from 'src/app/service/asignacion.service';

@Component({
  selector: 'app-lista-asignaciones',
  templateUrl: './lista-asignaciones.component.html',
  styleUrls: ['./lista-asignaciones.component.css']
})
export class ListaAsignacionesComponent implements OnInit {

  asignacionesList: Asignacion[];

  constructor(
    private asignacionService: AsignacionService
  ) { }

  ngOnInit() {

    this.asignacionService.obtenerAsignaciones().subscribe(data=>{
      this.asignacionesList = data;
    });
  }

}
