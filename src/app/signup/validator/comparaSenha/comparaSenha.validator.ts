import { ValidatorFn, FormGroup } from "@angular/forms";

export const comparaSenha: ValidatorFn = (formGroup: FormGroup) => {
    const confSenha = formGroup.get('confPassword').value;
    const password = formGroup.get('password').value;
    if(password.trim() && confSenha.trim()){
        if(confSenha != password){
            return { comparaSenha: true }
        }
        return null;
    }else{
        return null;
    }
};