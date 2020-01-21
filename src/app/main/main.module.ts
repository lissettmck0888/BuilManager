import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule} from '../main/main-routing.module'
import { MainComponent } from './main.component';
import { UsuariosComponent } from '../usuarios/usuarios.component';
import { RolesComponent } from '../roles/roles.component';
import { AgregarUsuarioComponent } from '../usuarios/agregar-usuario/agregar-usuario.component';
import { AgregarRolComponent } from '../roles/agregar-rol/agregar-rol.component';
import { AngularDualListBoxModule } from 'angular-dual-listbox';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PermitidoDirective } from '../directive/permitido.directive';
import { RegistroDepartamentoComponent } from '../registro-departamento/registro-departamento.component';
import { GastosComunesComponent } from '../gastos-comunes/gastos-comunes.component';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';
import { ComunidadComponent } from '../comunidad/comunidad.component';
import { AsignacionUnidadesComponent } from '../comunidad/asignacion-unidades/asignacion-unidades.component';
import {DataTableModule} from "angular-6-datatable";
import { PersonasComponent } from '../comunidad/personas/personas.component';
import { AgregarPersonaComponent } from '../comunidad/agregar-persona/agregar-persona.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HistoricoGastosComponent } from '../gastos-comunes/historico-gastos/historico-gastos.component';
import { ConsolidarGastosComponent } from '../gastos-comunes/consolidar-gastos/consolidar-gastos.component';
import { ResumenCobroIndividualComponent } from '../gastos-comunes/resumen-cobro-individual/resumen-cobro-individual.component';

@NgModule({
  declarations: [
    MainComponent,
    UsuariosComponent,
    RolesComponent,
    AgregarUsuarioComponent,
    AgregarRolComponent,
    RegistroDepartamentoComponent,
    PermitidoDirective,
    GastosComunesComponent,
    ComunidadComponent,
    AsignacionUnidadesComponent,
    PersonasComponent,
    AgregarPersonaComponent,
    HistoricoGastosComponent,
    ConsolidarGastosComponent,
    ResumenCobroIndividualComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MainRoutingModule,
    AngularDualListBoxModule,
    AutocompleteLibModule,
    DataTableModule,
    AngularFontAwesomeModule
  ]
})
export class MainModule { }
