import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { LoginService } from '../service/login-service/login-service.service';
import { emailPadraoValidator } from 'src/app/compartilhado/validators/email-validator/emailPadrao.validator';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  landingPage = "http://localhost:4200";
  loginForm: FormGroup;
  exibeSeLoginInvalido:boolean = false;

  // @ViewChild("InputEmail") inputEmail: ElementRef<HTMLInputElement>
  
  constructor(
    private formbuilder:FormBuilder,
    private router:Router,
    private loginService: LoginService) { }

  ngOnInit() {
    this.loginForm = this.formbuilder.group({
      email: ["", 
        [
          Validators.required,
          // emailPadraoValidator
        ]
      ],
      senha: ["", 
        [
          Validators.required
        ]
      ]
    });
  }

  login() {
    this.loginService.login(
      this.loginForm.get("email").value, 
      this.loginForm.get("senha").value)
    .subscribe(res => {
      if(res) {
        this.router.navigateByUrl("");
        // this.exibeSeLoginInvalido = false;
      }else{
        this.exibeSeLoginInvalido = true;
        this.loginForm.reset();
        // this.inputEmail.nativeElement.focus();
      }
    })
  }

  removeMensagem() {
    this.exibeSeLoginInvalido = false;
  }
  
}
