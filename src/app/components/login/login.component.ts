import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { LoginFormComponent } from '../forms/login-form/login-form.component';
import { RegisterFormComponent } from '../forms/register-form/register-form.component';
//import { LoginFormComponent } from 'src/app/components/forms/login-form/login-form.component'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  form!: ViewContainerRef

  constructor() { }

  ngOnInit(): void {
  }

}
