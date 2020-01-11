import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';
import { UserModel } from '../model/user.model';
import { GlobalService } from '../service/global.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public user: UserModel;

  constructor(
    private globalService: GlobalService,
    private loginService: LoginService,
    private router: Router
    ) { }

  ngOnInit() {
    this.user = this.globalService.currentUser;
  }

  cerrarSesion(event) {
    event.preventDefault();
    this.loginService.logout(); 
    this.router.navigate(['login']);
  }

}
