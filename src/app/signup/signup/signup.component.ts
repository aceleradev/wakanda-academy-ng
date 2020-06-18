import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { emailPadraoValidator } from 'src/app/compartilhado/validators/email-validator/emailPadrao.validator';
import { comparaSenha } from '../validator/comparaSenha/comparaSenha.validator';
import { SignupService } from '../service/signup.service';
import { NewUser } from '../interface/new-user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  landingPage = "http://localhost:4200/";
  signupForm: FormGroup;
  exibeSeExisteEmail: boolean = false;

  constructor(
    private fromBuilder: FormBuilder,
    private signupService: SignupService,
    private router: Router
    ) { }

  ngOnInit() {
    this.signupForm = this.fromBuilder.group({
      email:["",
      [
        Validators.required,
        emailPadraoValidator
      ],
    ],
      nome:["",
      [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(60)
      ]
    ],
      senha:["",
      [
        Validators.required
      ]
    ],
      confSenha:["",
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
        (res)=>{
          if(res){
            this.router.navigate(["Login"]);
            // this.exibeSeExisteEmail = false;
          }else{
            this.exibeSeExisteEmail = true;
            this.signupForm.reset();
          }
      })
  }

  removeMensagem() {
    this.exibeSeExisteEmail = false;
  }

}
