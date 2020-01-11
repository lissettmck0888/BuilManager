import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/service/usuario.service';
import { RolesComponent } from 'src/app/roles/roles.component';
import { RolService } from 'src/app/service/rol.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { UsuarioModel } from 'src/app/model/usuario.model';

@Component({
  selector: 'app-agregar-usuario',
  templateUrl: './agregar-usuario.component.html',
  styleUrls: ['./agregar-usuario.component.css']
})
export class AgregarUsuarioComponent implements OnInit {
  public roles: any[];
  public lista: any[] = [];
  public formUsuarios: FormGroup;

  private usuario: UsuarioModel = new UsuarioModel();

  constructor(
    private usuarioService: UsuarioService,
    private rolesService: RolService,
    private fb: FormBuilder) { }

  ngOnInit() {

    this.rolesService.getRoles().subscribe(data => {
      this.roles = data;
    });

    this.formUsuarios = this.fb.group({
      nombreUsuario: new FormControl(''),
      contrasena: new FormControl(''),
      rol: new FormControl('')
    });

    this.usuario = new UsuarioModel();

    this.formUsuarios.valueChanges.subscribe(values => console.log(values));
    this.formUsuarios.controls.nombreUsuario.valueChanges.subscribe(value => this.usuario.nombreUsuario = value);
    this.formUsuarios.controls.contrasena.valueChanges.subscribe(value => this.usuario.contrasena = value);
    this.formUsuarios.controls.rol.valueChanges.subscribe(value => {
      this.usuario.rol = this.roles.find(rol => rol.idRol === value);
    });

  }

  public guardarUsuario() {
    console.log('this.usuario');
    console.log(this.usuario);
    this.usuarioService.crearUsuario(this.usuario).subscribe(response => console.log(response));
  }

}
