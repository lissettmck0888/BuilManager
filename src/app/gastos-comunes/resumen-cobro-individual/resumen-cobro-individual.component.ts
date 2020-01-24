import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetalleDeudaUnidad } from 'src/app/model/detalle-deuda-unidad.model';

@Component({
  selector: 'app-resumen-cobro-individual',
  templateUrl: './resumen-cobro-individual.component.html',
  styleUrls: ['./resumen-cobro-individual.component.css']
})
export class ResumenCobroIndividualComponent implements OnInit {

  public detalleDeudaUnidadList: DetalleDeudaUnidad[];

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {

    this.activatedRoute.data.subscribe(data=>{
      console.log(data);
      this.detalleDeudaUnidadList = data.data;
    });
  }

}
