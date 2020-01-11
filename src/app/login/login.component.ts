import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { RolService } from '../service/rol.service';
import { GlobalService } from '../service/global.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loginError: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private rolService: RolService,
    private global: GlobalService,
    private router: Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      userName: new FormControl(''),
      password: new FormControl('')
    })
  }

  public autenticar() {
    this.loginService.autenticar(this.loginForm.value).subscribe(valido => {
      if(valido) {
        this.rolService.getPermisosRol(this.global.currentUser.rol).subscribe(permisos=>{
          console.log('permisos');
          console.log(permisos);
          this.global.permisos = permisos;
          this.router.navigate(['main']);
        });
      }else {
        console.log('fallo');
        this.loginError = true;
      }
    })
  }

}
