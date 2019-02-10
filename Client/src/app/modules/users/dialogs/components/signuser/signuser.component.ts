import { Component } from '@angular/core';
import {MatDialog, MatDialogConfig, MatDialogRef} from "@angular/material";
import {MatFormFieldModule} from '@angular/material/form-field'; 

@Component({
  selector: 'signuser',
  templateUrl: './signuser.html',
  styleUrls: ['./signuser.scss']
})

export class SignUser {
  private isSignUp: boolean;
  private dialogName: string;
  public username: string;
  public password: string;
  public email: string;

  constructor(public dialogRef: MatDialogRef<SignUser>) { 
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
  }

  OnCloseSignUp(){
    this.dialogRef.close({signAction: 'signUp', username: this.username, password: this.password, email: this.email});
  }
}
