import { Component, OnInit } from '@angular/core';
import { RolService } from 'src/app/service/rol.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-roles',
  templateUrl: './lista-roles.component.html',
  styleUrls: ['./lista-roles.component.css']
})
export class ListaRolesComponent implements OnInit {

  public roles: any[];
  public lista: any[] = [];
  public rol: any[];

  constructor(
    private rolService:RolService,
    private router: Router
  ) { }

  ngOnInit() {
    this.rolService.getRoles().subscribe(data =>{
      this.roles = data;
    });
  }

  public editarRol(rol : any, event){
    event.preventDefault();
    this.rolService.rolSeleccionado = rol;
    this.router.navigate(['/main/roles/editar']);
  }



}
