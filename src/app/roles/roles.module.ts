import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RolesRoutingModule } from './roles-routing..module';
import { ListaRolesComponent } from './lista-roles/lista-roles.component';
import { AgregarRolComponent } from './agregar-rol/agregar-rol.component';
import { RolesComponent } from './roles.component';
import { AngularDualListBoxModule } from 'angular-dual-listbox';

@NgModule({
  declarations: [RolesComponent, ListaRolesComponent, AgregarRolComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RolesRoutingModule,
    AngularDualListBoxModule
  ]
})
export class RolesModule { }
