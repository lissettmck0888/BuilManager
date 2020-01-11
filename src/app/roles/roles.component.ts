import { Component, OnInit } from '@angular/core';
import { RolService } from '../service/rol.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {

  public roles: any[];
  public lista: any[] = [];

  constructor(
    private rolService:RolService,
    private router: Router
  ) { }

  ngOnInit() {
    this.rolService.getRoles().subscribe(data =>{
      this.roles = data;
    });
  }

  public editarRol(rol : any){
    this.rolService.rolSeleccionado = rol;
    this.router.navigate(['/main/roles/editar']);
  }

}
