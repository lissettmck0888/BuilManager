import { Component, OnInit } from '@angular/core';
import { RolService } from '../service/rol.service';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {

  public roles: any[];
  constructor(private rolService:RolService) { }

  ngOnInit() {
    this.rolService.getRol().subscribe(data =>{
      this.roles = data;
    });
  }

}
