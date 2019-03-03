import { Component } from '@angular/core';
import { FormControl, ValidatorFn, AbstractControl, Validators, FormGroup } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { MatDialog, MatDialogConfig, MatDialogRef } from "@angular/material";
import { BackendService } from 'src/app/core/services/backend/api/backend.service';
import { LoginUserRequestServer } from 'src/app/core/services/users/models/LoginUserRequestServer.model';
import { AuthenticationService } from 'src/app/core/services/backend/authentication/authentication.service';
import { RegisterUserRequestServer } from 'src/app/core/services/users/models/RegisterUserRequestServer.model';

const configServerUrl: string = 'https://dad-server.azurewebsites.net';
const usersUrl: string = '/Users';
const signInUrl: string = '/login';
const signUpUrl: string = '/register';

@Component({
  selector: 'signuser',
  templateUrl: './signuser.html',
  styleUrls: ['./signuser.scss']
})

export class SignUser {
  private isSignUp: boolean;
  public dialogName: string;
  public username: string;
  public password: string;
  public repeatPassword: string;
  public email: string;

  public usernameFormControl: FormControl;
  public passwordFormControl: FormControl;
  public repeatPasswordFormControl: FormControl;
  public emailFormControl: FormControl;
  public profileFormSignIn: FormGroup;
  public profileFormSignUp: FormGroup;
  
  constructor(public dialogRef: MatDialogRef<SignUser>, private backend: BackendService, private authentication: AuthenticationService) { 
    this.isSignUp = false;
    this.dialogName = 'Sign In';

    this.usernameFormControl = new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(20),
    ]);

    this.passwordFormControl = new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(20)
    ]);

    this.repeatPasswordFormControl = new FormControl('',[
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(20),
      this.PasswordsHaveToMatchValidator()
    ]);

    this.emailFormControl = new FormControl('', [
      Validators.required,
      Validators.email,
    ]);
  }
  
  OnSignUp(){
    this.isSignUp= true;
    this.dialogName = 'Sign Up'
  }

  IsSignUp(){
    return this.isSignUp;
  }

  IsSignInDisabled()
  {
    return this.usernameFormControl.invalid || this.passwordFormControl.invalid;
  }

  IsSignUpDisabled()
  {
    return this.usernameFormControl.invalid || this.passwordFormControl.invalid ||  this.repeatPasswordFormControl.invalid ||  this.emailFormControl.invalid;
  }

  OnCloseSignIn(){
    this.backend.post<LoginUserRequestServer>(configServerUrl + usersUrl + signInUrl, {Username: this.username, Password: this.password})
    .subscribe(response => 
      {   
        localStorage.setItem('token', response.body.message);   
        console.log(response);
        this.dialogRef.close({signAction: 'Logged in', username: this.username, password: this.password});
      }, 
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          window.alert("Client-side error occured.");
        } else {
          window.alert("Server-side error occured.");
        }
        this.dialogRef.close({signAction: 'Log in failed', username: this.username, password: this.password});
      }
    ); 
  }

  OnCloseSignUp(){
    this.backend.post<RegisterUserRequestServer>(configServerUrl + usersUrl + signUpUrl, {Username: this.username, Password: this.password, Email: this.email})
    .subscribe(response => 
      {        
        window.alert("User created!");
        this.authentication.setToken(response.body.message);
        console.log(response);
      }
    );
        this.dialogRef.close({signAction: 'signUp', username: this.username, password: this.password, email: this.email});
  }

  PasswordsHaveToMatchValidator(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
      /*if(this.repeatPassword === this.password)
      {*/
        return null;
      /*}
      return {
        passwordMatch: {
          password: this.password,
          repeatedPassword: this.repeatPassword
        }
      }*/
    }
  }
}
