import { AbstractControl } from '@angular/forms';

//const REGEX_EMAIL = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{3,}))$/;
const REGEX_EMAIL = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;

export function emailPadraoValidator(control: AbstractControl) {
    
    if(control.value.trim() && REGEX_EMAIL.test(control.value)){
        return null
    }
    return { emailPadrao: true};
}