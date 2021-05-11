import { Component, OnInit } from '@angular/core';
import { Asignacion } from 'src/app/model/asignacion.model';
import { AsignacionService } from 'src/app/service/asignacion.service';
import { AsignacionUnidad } from 'src/app/model/asignacion-unidad.model';
import { Unidad } from 'src/app/model/unidad.model';

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

  showUnidadCopropiedad(unidadList:Unidad[]): Unidad {
    return unidadList.find(unidad=>unidad.esUnidadCopropiedad);
  }

  showUnidadesAdicionales(unidadList:Unidad[]): Unidad[] {
    return unidadList.filter(unidad=>!unidad.esUnidadCopropiedad);
  }

}
