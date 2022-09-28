import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.sass']
})
export class LoginFormComponent implements OnInit {
  @Output() closed = new EventEmitter<any>()
  loginForm!: FormGroup


  constructor() { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      emailValue: new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')
        //Validators.email
      ]),
      passwordValue: new FormControl('', [
        Validators.required,
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[.@$!%*?&])[A-Za-z\\d.@$!%*?&]{8,}$')
      ])
    })
  }

  

  submitLogin(){
  }

  close(){
    this.closed.emit('sus')
  }

}
