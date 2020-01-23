import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { GastoComunService } from 'src/app/service/gasto-comun.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-consolidar-gastos',
  templateUrl: './consolidar-gastos.component.html',
  styleUrls: ['./consolidar-gastos.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConsolidarGastosComponent implements OnInit {

  gastosOrdinariosList: any[];
  gastosExtraordinariosList: any[];
  
  constructor(
    private gastoComunService: GastoComunService,
    private fb: FormBuilder,
    private cd: ChangeDetectorRef
  ) { }
  
  ngOnInit() {

    this.gastoComunService.getPlantillaGastosOrdinarios().subscribe(data=>{
      this.gastosOrdinariosList = data;
      this.gastoComunService.getGastoComunAbierto().subscribe(data => {
        this.gastosExtraordinariosList = data.listaDetalleGastoComun;
        this.cd.detectChanges();
      });
    });
  }

}
