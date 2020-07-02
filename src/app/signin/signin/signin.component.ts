import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { LoginService } from '../service/login-service/login-service.service';
import { emailPadraoValidator } from 'src/app/compartilhado/validators/email-validator/emailPadrao.validator';

import * as environment from '../../../environments/environment.js';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  landingPage = environment.environment.landingpageUrl;
  loginForm: FormGroup;

  @ViewChild("InputEmail") inputEmail: ElementRef<HTMLInputElement>

  constructor(
    private formbuilder:FormBuilder,
    private router:Router,
    private loginService: LoginService,
    private route: ActivatedRoute) { }

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
    let success = this.route.snapshot.queryParamMap.get('success') == 'true';
    this.loginService.login(
      this.loginForm.get("email").value, 
      this.loginForm.get("senha").value,
      success)
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
