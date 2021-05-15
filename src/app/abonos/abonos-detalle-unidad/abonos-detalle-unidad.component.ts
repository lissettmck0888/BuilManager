import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DetalleDeudaUnidad } from 'src/app/model/detalle-deuda-unidad.model';
import { AbonosService } from 'src/app/service/abonos.service';

@Component({
  selector: 'app-abonos-detalle-unidad',
  templateUrl: './abonos-detalle-unidad.component.html',
  styleUrls: ['./abonos-detalle-unidad.component.css']
})
export class AbonosDetalleUnidadComponent implements OnInit {
  detalleDeudaUnidad : FormGroup;
  detalleDeuda : DetalleDeudaUnidad;
  constructor(private fromBuilder:FormBuilder, private abonoService:AbonosService) { }

  ngOnInit() {
    this.detalleDeuda = this.abonoService.detalleDeuda;

    this.detalleDeudaUnidad = this.fromBuilder.group({})
     
  }

}
