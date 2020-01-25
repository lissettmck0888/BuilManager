import { Injectable, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AbonosComponent } from './abonos.component';
import { AbonosPeriodoComponent } from './abonos-periodo/abonos-periodo.component';
import { RegistrarAbonoComponent } from './registrar-abono/registrar-abono.component';
import { AbonosResolverService } from '../service/abonos-resolver.service';

const routes = [
    {
        path: '',
        component: AbonosComponent,
        children: [
            {path:'periodo', component: AbonosPeriodoComponent, resolve: {resolverData: AbonosResolverService} },
            {path:'registrar', component: RegistrarAbonoComponent },
            {path:'', redirectTo: 'periodo' }
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
export class AbonosRoutingModule {

}