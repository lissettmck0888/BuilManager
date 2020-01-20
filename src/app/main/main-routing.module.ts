import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UsuariosComponent } from '../usuarios/usuarios.component';
import { RolesComponent } from '../roles/roles.component';
import { MainComponent } from './main.component';
import { AgregarRolComponent } from '../roles/agregar-rol/agregar-rol.component';
import { AgregarUsuarioComponent } from '../usuarios/agregar-usuario/agregar-usuario.component';
import { RegistroDepartamentoComponent } from '../registro-departamento/registro-departamento.component';
import { ComunidadComponent } from '../comunidad/comunidad.component';
import { AsignacionUnidadesComponent } from '../comunidad/asignacion-unidades/asignacion-unidades.component';
import { PersonasComponent } from '../comunidad/personas/personas.component';
import { AgregarPersonaComponent } from '../comunidad/agregar-persona/agregar-persona.component';

const routes = [
    {
        path: '',
        component: MainComponent,
        children: [
            {
                path: 'usuarios',
                component: UsuariosComponent
            },
            {
                path: 'roles',
                component: RolesComponent
            },
            {
                path: 'roles/editar',
                component: AgregarRolComponent
            },
            {
                path: 'usuarios/agregar',
                component: AgregarUsuarioComponent
            },
            {
                path: 'usuarios/editar',
                component: AgregarUsuarioComponent
            },
            {
                path: 'comunidad',
                component: ComunidadComponent
            },
            {
                path: 'comunidad/asignacion-unidades',
                component: AsignacionUnidadesComponent
            },
            {
                path: 'comunidad/personas',
                component: PersonasComponent
            },
            {
                path: 'comunidad/agregar-persona',
                component: AgregarPersonaComponent
            }
        ]
    }/* ,
    {
        path: 'usuarios',
        component: UsuariosComponent
    },
    {
        path: 'roles',
        component: RolesComponent
    },
    {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
    } */
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class MainRoutingModule { }
