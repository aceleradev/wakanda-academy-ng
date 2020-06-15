import { ValidatorFn, FormGroup } from "@angular/forms";

export const comparaSenha: ValidatorFn = (formGroup: FormGroup) => {
<<<<<<< HEAD
    const confSenha = formGroup.get('confPassword').value;
    const password = formGroup.get('password').value;
=======
    const confSenha = formGroup.get('confSenha').value;
    const password = formGroup.get('senha').value;
>>>>>>> projeto
    if(password.trim() && confSenha.trim()){
        if(confSenha != password){
            return { comparaSenha: true }
        }
        return null;
    }else{
        return null;
    }
};