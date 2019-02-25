import { Component } from '@angular/core';
import {MatDialog, MatDialogConfig, MatDialogRef} from "@angular/material";
import { BackendService } from 'src/app/core/services/backend/api/backend.service';
import { LoginUserRequestServer } from 'src/app/core/services/users/models/LoginUserRequestServer.model';
import { RegisterUserRequestServer } from 'src/app/core/services/users/models/RegisterUserRequestServer.model';
HttpErrorResponse

const configServerUrl: string = 'https://dad-server.azurewebsites.net';
const usersUrl: string = 'Users';
const signInUrl: string = 'login';
const signUpUrl: string = 'register';

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
  public email: string;

  constructor(public dialogRef: MatDialogRef<SignUser>, private backend: BackendService) { 
    this.isSignUp = false;
    this.dialogName = 'Sign  In';
  }
  
  OnSignUp(){
    this.isSignUp= true;
    this.dialogName = 'Sign Up'
  }

  IsSignUp(){
    return this.isSignUp;
  }

  OnCloseSignIn(){
    this.dialogRef.close({signAction: 'signIn', username: this.username, password: this.password});
    this.backend.post<LoginUserRequestServer>(configServerUrl + usersUrl + signInUrl, {Username: this.username, Password: this.password})
    .subscribe(response => 
      {        
        console.log(response);
      }, 
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log("Client-side error occured.");
        } else {
          console.log("Server-side error occured.");
        }
      }
    ); 
  }

  OnCloseSignUp(){
    this.dialogRef.close({signAction: 'signUp', username: this.username, password: this.password, email: this.email});
    this.backend.post<RegisterUserRequestServer>(configServerUrl + usersUrl + signUpUrl, {Username: this.username, Password: this.password, Email: this.email})
    .subscribe(response => 
      {        
        console.log(response);
      }
    );
  }
}
