import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
<<<<<<< HEAD
import { Router, ActivatedRoute } from '@angular/router';
=======
import { Router } from '@angular/router';
>>>>>>> projeto

import { LoginService } from '../service/login-service/login-service.service';
import { emailPadraoValidator } from 'src/app/compartilhado/validators/email-validator/emailPadrao.validator';

<<<<<<< HEAD
import * as environment from '../../../environments/environment.js';

=======
>>>>>>> projeto
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
<<<<<<< HEAD
  landingPage = environment.landingpageUrl;
=======
  landingPage = "http://localhost:4200";
>>>>>>> projeto
  loginForm: FormGroup;

  @ViewChild("InputEmail") inputEmail: ElementRef<HTMLInputElement>

  constructor(
    private formbuilder:FormBuilder,
    private router:Router,
<<<<<<< HEAD
    private loginService: LoginService,
    private route: ActivatedRoute) { }
=======
    private loginService: LoginService) { }
>>>>>>> projeto

  ngOnInit() {
    this.loginForm = this.formbuilder.group({
      email: ["", 
        [
          Validators.required,
          emailPadraoValidator
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
<<<<<<< HEAD
    let success = this.route.snapshot.queryParamMap.get('success') == 'true';
    this.loginService.login(
      this.loginForm.get("email").value, 
      this.loginForm.get("senha").value,
      success)
=======
    this.loginService.login(
      this.loginForm.get("email").value, 
      this.loginForm.get("senha").value)
>>>>>>> projeto
    .subscribe(() => {
       this.router.navigateByUrl("");
    }, err => {
      console.log(err);
      this.loginForm.reset();
      this.inputEmail.nativeElement.focus();
      alert('algo deu errado, tente novamente');
    });
  }

}
