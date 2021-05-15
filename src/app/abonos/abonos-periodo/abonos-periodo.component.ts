import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DetalleDeudaUnidad } from 'src/app/model/detalle-deuda-unidad.model';
import { AbonosService } from 'src/app/service/abonos.service';

@Component({
  selector: 'app-abonos-periodo',
  templateUrl: './abonos-periodo.component.html',
  styleUrls: ['./abonos-periodo.component.css']
})
export class AbonosPeriodoComponent implements OnInit {

  public detalleDeudaUnidadList: DetalleDeudaUnidad[];

  constructor(private activatedRoute: ActivatedRoute,private router: Router, private abonoService: AbonosService) { }

  ngOnInit() {

    this.activatedRoute.data.subscribe(data=>{
      console.log(data.resolverData);
      this.detalleDeudaUnidadList = data.resolverData;
    });

  }
    abonar(detalleDeuda : DetalleDeudaUnidad){
      this.abonoService.detalleDeuda = detalleDeuda;
      this.router.navigate(['main/abonos/registrar']);

    }

    detallevvv(detalleDeuda: DetalleDeudaUnidad){
      this.abonoService.detalleDeuda = detalleDeuda;
      this.router.navigate(['main/abonos/detalle']);
    }

}
