import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { emailPadraoValidator } from 'src/app/compartilhado/validators/email-validator/emailPadrao.validator';
import { comparaSenha } from '../validator/comparaSenha/comparaSenha.validator';
import { SignupService } from '../service/signup.service';
import { NewUser } from '../interface/new-user';
import { Router } from '@angular/router';
import { CheckEmailNotTakenValidatorService } from '../validator/checkEmailNotTaken/checkEmailTaken.validator.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  landingPage="http://localhost:4200/";
  signupForm: FormGroup;

  constructor(
    private fromBuilder: FormBuilder,
    private signupService: SignupService,
    private router: Router,
    private CheckEmailNotTakenValidatorService: CheckEmailNotTakenValidatorService
    ) { }

  ngOnInit() {
    this.signupForm = this.fromBuilder.group({
      email:["",
      [
        Validators.required,
        emailPadraoValidator
      ],
      // this.CheckEmailNotTakenValidatorService.checkUserEmailTaken()
    ],
      name:["",
      [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(60)
      ]
    ],
      password:["",
      [
        Validators.required
      ]
    ],
      confPassword:["",
      [
        Validators.required
      ]
    ]

    },{validator: comparaSenha});
  }

  enviar() {
    const newUser = this.signupForm.getRawValue() as NewUser;
    console.log(newUser);
    this.signupService
      .register(newUser)
      .subscribe(
        ()=>{this.router.navigate(["login"])},
        err => console.log(err)
      )
  }

}
