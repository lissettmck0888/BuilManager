import { Injectable, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RolesComponent } from './roles.component';
import { ListaRolesComponent } from './lista-roles/lista-roles.component';
import { AgregarRolComponent } from './agregar-rol/agregar-rol.component';

const routes = [
    {
        path: '',
        component: RolesComponent,
        children: [
            {path:'all', component: ListaRolesComponent },
            {path:'editar', component: AgregarRolComponent },
            {path:'', redirectTo: 'all' }
        ]
    }
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class RolesRoutingModule {

}