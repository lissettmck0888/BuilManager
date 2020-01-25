import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeGastosComponent } from './home-gastos/home-gastos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GastosComunesRoutingModule } from './gastos-comunes-routing.module';
import { GastosComunesComponent } from './gastos-comunes.component';
import { ConsolidarGastosComponent } from './consolidar-gastos/consolidar-gastos.component';
import { ResumenCobroIndividualComponent } from './resumen-cobro-individual/resumen-cobro-individual.component';
import { DataTableModule } from 'angular-6-datatable';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';

@NgModule({
  declarations: [GastosComunesComponent, HomeGastosComponent, ConsolidarGastosComponent, ResumenCobroIndividualComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    GastosComunesRoutingModule,
    AutocompleteLibModule,
    DataTableModule
  ]
})
export class GastosComunesModule { }
