import { Component, OnInit } from '@angular/core';
import { RolService } from 'src/app/service/rol.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-rol',
  templateUrl: './agregar-rol.component.html',
  styleUrls: ['./agregar-rol.component.css']
})
export class AgregarRolComponent implements OnInit {

  public rolSeleccionado: any;
  public permisosDisponibles: any[];

  constructor(
    private rolService: RolService,
    private router: Router
    ) { }

  ngOnInit() {
    this.rolSeleccionado = this.rolService.rolSeleccionado;
    this.rolService.getPermisos().subscribe(data => {
      this.permisosDisponibles = (<any[]>data).filter(permiso => !this.rolSeleccionado.permisos.includes(permiso));
    });
  }

  public guardarRol() {
    console.log('this.usuario');
    console.log(this.rolSeleccionado);
    this.rolService.guardarRol(this.rolSeleccionado).subscribe(response => {
      console.log(response);
      this.router.navigate(['/main/roles']);
    });
  }
}
