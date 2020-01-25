import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { GastoComunService } from '../service/gasto-comun.service';
import { ItemGastoComun } from '../model/item-gasto-comun.model';
import { GastoComun } from '../model/gasto-comun.model';
import { DetalleGastoComun } from '../model/detalle-gasto-comun.model';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-gastos-comunes',
  templateUrl: './gastos-comunes.component.html',
  styleUrls: ['./gastos-comunes.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GastosComunesComponent implements OnInit {
  ngOnInit(): void {
  }


}
