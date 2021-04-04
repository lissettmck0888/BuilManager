import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { GastoComunService } from 'src/app/service/gasto-comun.service';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { GastoComun } from 'src/app/model/gasto-comun.model';
import { PlantillaGastosOrdinarios } from 'src/app/model/plantilla-gastos-ordinarios.model';
import { DetalleGastoComun } from 'src/app/model/detalle-gasto-comun.model';

@Component({
  selector: 'app-consolidar-gastos',
  templateUrl: './consolidar-gastos.component.html',
  styleUrls: ['./consolidar-gastos.component.css']
})
export class ConsolidarGastosComponent implements OnInit {

  gastoComun: GastoComun;
  gastosOrdinariosList: PlantillaGastosOrdinarios[];
  gastosExtraordinariosList: DetalleGastoComun[];
  
  public sumaParcial: number;

  constructor(
    private gastoComunService: GastoComunService,
    private fb: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }
  
  ngOnInit() {

    this.activatedRoute.data.subscribe(data=>{
      console.log('data resolver');
      console.log(data);
      this.gastosOrdinariosList = data.resolverData.plantillaGastos;
      this.cargarComoGastoComun();
      this.gastoComun = data.resolverData.gastoComun;
      this.gastosExtraordinariosList = this.gastoComun.listaDetalleGastoComun;
      this.calcularTotalParcial();
    });

  }

  cerrarGastoComunPeriodo() {
    /* TODO invocar servicio cerrar gasto comun */
    
    /*this.gastosOrdinariosList.forEach(gasto=>{
      let detalleGasto: DetalleGastoComun = new DetalleGastoComun();
      detalleGasto.gastoComun = this.gastoComun.idGastoComun;
      detalleGasto.itemGastoComun = gasto.itemGastoComun;
      detalleGasto.monto = gasto.monto;
      this.gastoComun.listaDetalleGastoComun.push(detalleGasto);
    });*/
    
    this.gastoComunService.cerrarGastoComun(this.gastoComun).subscribe(resp=>{
      this.router.navigate(['/main/gastos-comunes/resumen']);
    });
  }

  private calcularTotalParcial(){
    this.sumaParcial = this.gastosOrdinariosList.map(ord=>ord.monto).reduce((a,b)=> a+b);
    console.log('this.sumaParcial');
    console.log(this.sumaParcial);
    if(this.gastosExtraordinariosList && this.gastosExtraordinariosList.length > 0){
      this.sumaParcial += this.gastosExtraordinariosList.map(ext=>ext.monto).reduce((a,b)=> a+b);
      console.log('this.sumaParcial');
      console.log(this.sumaParcial);
    }
  }

  private cargarComoGastoComun() {
  }
}
