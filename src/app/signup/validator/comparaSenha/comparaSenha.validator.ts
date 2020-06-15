import { ValidatorFn, FormGroup } from "@angular/forms";

export const comparaSenha: ValidatorFn = (formGroup: FormGroup) => {
    const confSenha = formGroup.get('confSenha').value;
    const password = formGroup.get('senha').value;
    if(password.trim() && confSenha.trim()){
        if(confSenha != password){
            return { comparaSenha: true }
        }
        return null;
    }else{
        return null;
    }
};