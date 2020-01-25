import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetalleDeudaUnidad } from 'src/app/model/detalle-deuda-unidad.model';

@Component({
  selector: 'app-abonos-periodo',
  templateUrl: './abonos-periodo.component.html',
  styleUrls: ['./abonos-periodo.component.css']
})
export class AbonosPeriodoComponent implements OnInit {

  public detalleDeudaUnidadList: DetalleDeudaUnidad[];

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {

    this.activatedRoute.data.subscribe(data=>{
      console.log(data.resolverData);
      this.detalleDeudaUnidadList = data.resolverData;
    });
  }

}
