import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/service/usuario.service';
import { RolService } from 'src/app/service/rol.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  public usuarios: any[];
  public roles: any[];

  public editarRol: boolean[] = [];
  public nuevoRol: number[] = [];

  constructor(
    private usuarioService: UsuarioService,
    private rolesService: RolService,
    private router: Router
  ) { }

  ngOnInit() {

    this.rolesService.getRoles().subscribe(data => {
      this.roles = data;

      this.usuarioService.getUsuarios().subscribe(data => {
        console.log(data);
        this.usuarios = data;
        this.usuarios.forEach(u => {
          this.editarRol.push(false);
          this.nuevoRol.push(u.rol.idRol);
        });
      });
    });

  }

  public cambiarRolModo(i: number, flag: boolean, event) {
    event.preventDefault();
    this.editarRol[i] = flag;
  }
  
  checkSelected(rolUsuario: any, rol:any): boolean {
    console.log(rolUsuario.idRol + ' | ' + rol.idRol + '=' + (rolUsuario.idRol===rol.idRol));
    return rolUsuario.idRol===rol.idRol;
  }

  public guardarUsuario(index:number, event) {
    event.preventDefault();
    const selectedRol = this.roles.find(rol=>Number(rol.idRol)===Number(this.nuevoRol[index]));
    this.usuarios[index].rol = selectedRol;
    this.usuarioService.crearUsuario(this.usuarios[index]).subscribe(response => console.log(response));
    this.editarRol[index] = false;
  }

  public eliminarUsuario(index:number, event){
    console.log('fsfds');
    event.preventDefault();
    this.usuarioService.eliminarUsuario(this.usuarios[index].idUsuario).subscribe(resp=>{
      console.log('eliminado');
    });
  }
}
