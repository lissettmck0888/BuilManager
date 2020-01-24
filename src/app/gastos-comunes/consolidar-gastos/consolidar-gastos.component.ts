import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { GastoComunService } from 'src/app/service/gasto-comun.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { GastoComun } from 'src/app/model/gasto-comun.model';

@Component({
  selector: 'app-consolidar-gastos',
  templateUrl: './consolidar-gastos.component.html',
  styleUrls: ['./consolidar-gastos.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConsolidarGastosComponent implements OnInit {

  gastoComun: GastoComun;
  gastosOrdinariosList: any[];
  gastosExtraordinariosList: any[];
  
  constructor(
    private gastoComunService: GastoComunService,
    private fb: FormBuilder,
    private cd: ChangeDetectorRef,
    private router: Router
  ) { }
  
  ngOnInit() {

    this.gastoComunService.getPlantillaGastosOrdinarios().subscribe(data=>{
      this.gastosOrdinariosList = data;
      this.gastoComunService.getGastoComunAbierto().subscribe(data => {
        this.gastoComun = data;
        this.gastosExtraordinariosList = this.gastoComun.listaDetalleGastoComun;
        this.cd.detectChanges();
      });
    });
  }

  cerrarGastoComunPeriodo() {
    /* TODO invocar servicio cerrar gasto comun */
    this.gastoComunService.cerrarGastoComun(this.gastoComun).subscribe(resp=>{
      this.router.navigate(['/main/gastos-comunes/resumen']);
    });
  }

}
