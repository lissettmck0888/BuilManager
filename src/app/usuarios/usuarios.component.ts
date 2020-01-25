import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../service/usuario.service';
import { UsuarioModel } from '../model/usuario.model';
import { Router } from '@angular/router';
import { RolService } from '../service/rol.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  ngOnInit(): void {
  }


}
