import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/service/usuario.service';
import { RolesComponent } from 'src/app/roles/roles.component';
import { RolService } from 'src/app/service/rol.service';

@Component({
  selector: 'app-agregar-usuario',
  templateUrl: './agregar-usuario.component.html',
  styleUrls: ['./agregar-usuario.component.css']
})
export class AgregarUsuarioComponent implements OnInit {
  public roles: any[];
  public lista: any[]= [];
  constructor(private rolesService: RolService ) { }

  ngOnInit() {
     this.rolesService.getRoles().subscribe(data =>{
       this.roles = data;
     })
  }

}
