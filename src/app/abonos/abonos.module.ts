import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbonosPeriodoComponent } from './abonos-periodo/abonos-periodo.component';
import { RegistrarAbonoComponent } from './registrar-abono/registrar-abono.component';
import { AbonosComponent } from './abonos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AbonosRoutingModule } from './abonos-routing.module';
import { DataTableModule } from 'angular-6-datatable';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';



@NgModule({
  declarations: [AbonosComponent, AbonosPeriodoComponent, RegistrarAbonoComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AbonosRoutingModule,
    AutocompleteLibModule,
    DataTableModule
  ]
})
export class AbonosModule { }
