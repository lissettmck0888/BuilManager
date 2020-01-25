import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { ComunidadComponent } from '../comunidad/comunidad.component';
import { AsignacionUnidadesComponent } from '../comunidad/asignacion-unidades/asignacion-unidades.component';
import { PersonasComponent } from '../comunidad/personas/personas.component';
import { AgregarPersonaComponent } from '../comunidad/agregar-persona/agregar-persona.component';
import { GastosComunesComponent } from '../gastos-comunes/gastos-comunes.component';
import { AuthGuard } from '../service/auth.guard';
import { ConsolidarGastosComponent } from '../gastos-comunes/consolidar-gastos/consolidar-gastos.component';
import { ResumenCobroIndividualComponent } from '../gastos-comunes/resumen-cobro-individual/resumen-cobro-individual.component';
import { DetalleIndividualResolver } from '../service/detalle-individual-resolver.service';

const routes = [
    {
        path: '',
        component: MainComponent,
        canActivateChild: [AuthGuard],
        children: [
            {
                path: 'usuarios',
                loadChildren: '../usuarios/usuarios.module#UsuariosModule'
            },
            {
                path: 'roles',
                loadChildren: '../roles/roles.module#RolesModule'
            },
            {
                path: 'comunidad',
                loadChildren: '../comunidad/comunidad.module#ComunidadModule'
            },
            {
                path: 'gastos-comunes',
                loadChildren: '../gastos-comunes/gastos-comunes.module#GastosComunesModule'
            }
        ]
    }
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
