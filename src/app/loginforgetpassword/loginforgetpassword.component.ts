import { Component } from '@angular/core';
import { AccountService } from '../_services';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, NgForm, AbstractControl, ValidationErrors } from '@angular/forms';
import { code } from 'ionicons/icons';
import { OTPSERVICE } from '../_services/OTP.service';
@Component({
  selector: 'app-loginforgetpassword',
  templateUrl: './loginforgetpassword.component.html',
  styleUrls: ['./loginforgetpassword.component.css']
})
export class LoginforgetpasswordComponent {

  token: string | undefined;
  fg: FormGroup;
  fgreset: FormGroup;
  showResetPasswordCard: boolean = false;

  constructor(private acountservice: AccountService, private router: Router,private otpservice:OTPSERVICE) {
    this.token = undefined;}

    passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
      const newPassword = control.get('newPassword');
      const confirmPassword = control.get('confirmPassword');
  
      if (newPassword && confirmPassword && newPassword.value !== confirmPassword.value) {
        return { passwordMismatch: true };
      }
  
      return null;
    }
    ngOnInit(): void {
      this.fg = new FormGroup({
        email: new FormControl('', [Validators.required]),
        recaptcha: new FormControl(null, [Validators.required])
      });
      this.fgreset = new FormGroup({
        code: new FormControl('', [Validators.required]),
        newPassword: new FormControl('', [Validators.required]),
        confirmPassword: new FormControl('', [Validators.required]),
      }, this.passwordMatchValidator);

}
public submitfg(): void {

if(this.fg.valid){
  this.acountservice.userForgetPassword(this.fg.value.email).subscribe( (response) => 
  { 
    this.showResetPasswordCard = true;
    alert ("code sent successfully to your mail")

  },
  (error) => alert ("code invalide resend it "))

}}
public submitfgreset(): void {
if(this.fgreset.valid){

  const formData = {
        newPassword: this.fgreset.value.newPassword,
        code: this.fgreset.value.code,
      };
      this.acountservice.forgetPasswordbyemail(this.fg.value.email, formData).subscribe( (response) => {
        alert ("password changed successfully")
        this.router.navigate(['/signin']);
      },
     
      error => alert ("error while changing password"))

      
}
else{
  alert("form invalid");

}

}

resendcode($event: any) {
  $event.preventDefault();
  this.submitfg();
}


}