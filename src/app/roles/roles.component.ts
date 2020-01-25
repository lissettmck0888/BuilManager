import { Component, OnInit } from '@angular/core';
import { RolService } from '../service/rol.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {
  ngOnInit(): void {
  }


}
