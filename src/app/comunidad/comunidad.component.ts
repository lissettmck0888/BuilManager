import { Component, OnInit } from '@angular/core';
import { AsignacionService } from '../service/asignacion.service';
import { Asignacion } from '../model/asignacion.model';

@Component({
  selector: 'app-comunidad',
  templateUrl: './comunidad.component.html',
  styleUrls: ['./comunidad.component.css']
})
export class ComunidadComponent implements OnInit {

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
