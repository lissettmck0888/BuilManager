import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';
import { UserModel } from '../model/user.model';
import { GlobalService } from '../service/global.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public user: UserModel;

  constructor(
    private globalService: GlobalService
    ) { }

  ngOnInit() {
    this.user = this.globalService.currentUser;
  }

}
