import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export const matchPassword: ValidatorFn = (control: AbstractControl): ValidationErrors | null =>{
    let password = control.get('password');
    let confirmPassword = control.get('confirmpassword');

    

    if(password?.value && confirmPassword?.value && password?.value !== confirmPassword?.value){
        return {passwordmatcherror : true};
    }

    return null;
}

export const passwordMinLength: ValidatorFn = (control: AbstractControl): ValidationErrors | null =>{
    let password = control.get('password');
    if(password?.value && (password?.value.length() < 6)){
        return {passwordtoosmallerror: true};
    }
    return null;
}