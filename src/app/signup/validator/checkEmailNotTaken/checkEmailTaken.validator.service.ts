import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { debounceTime, switchMap, map, first } from 'rxjs/operators';

import { SignupService } from '../../service/signup.service';

@Injectable({ providedIn: 'root' })
    export class CheckEmailNotTakenValidatorService {
        constructor(private signUpService: SignupService) {}

        checkUserEmailTaken() {
        //     return (control: AbstractControl) => {    
        //         return control
        //             .valueChanges
        //             .pipe(debounceTime(300))
        //             .pipe(switchMap(email => 
        //                 this.signUpService.verSeJaCadastrado(email)
        //             ))
        //             .pipe(map(isTaken => isTaken ? { emailTaken:false } : null))
        //             .pipe(first())
        // }
    }
}