import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../service/usuario.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  public usuarios: any[];
  
  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {

    this.usuarioService.getUsuarios().subscribe(data => {
      console.log(data);
      this.usuarios = data;
    });
  }

}
