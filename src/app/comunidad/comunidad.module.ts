import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComunidadRoutingModule } from './comunidad-routing,.module';
import { ComunidadComponent } from './comunidad.component';
import { AgregarPersonaComponent } from './agregar-persona/agregar-persona.component';
import { PersonasComponent } from './personas/personas.component';
import { ListaAsignacionesComponent } from './lista-asignaciones/lista-asignaciones.component';
import { AsignacionUnidadesComponent } from './asignacion-unidades/asignacion-unidades.component';
import { DataTableModule } from 'angular-6-datatable';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';



@NgModule({
  declarations: [ComunidadComponent, AgregarPersonaComponent, PersonasComponent, ListaAsignacionesComponent, AsignacionUnidadesComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ComunidadRoutingModule,
    AutocompleteLibModule,
    DataTableModule
  ]
})
export class ComunidadModule { }
