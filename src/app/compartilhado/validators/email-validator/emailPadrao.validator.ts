import { AbstractControl } from '@angular/forms';

const REGEX_EMAIL = /^[\\w-]+(\\.[\\w-]+)*@([\\w-]+\\.)+[a-zA-Z]{2,7}$/;

export function emailPadraoValidator(control: AbstractControl) {
    
    if(control.value && control.value.trim()&&
    REGEX_EMAIL
    .test(control.value)){
         return { emailPadrao: true}    
    }
    return null;
}