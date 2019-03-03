import { Component } from '@angular/core';
import { SignUser } from 'src/app/modules/users/dialogs/components/signuser/signuser.component';
import { MatDialog, MatDialogConfig } from "@angular/material";
import { Observable, of } from 'rxjs';

const signOut = 'Sign Out';
const signInUp = 'Sign In/Sign Up'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  public title = 'client';
  public $signAction: Observable<string>;
  private signAction: string;
  private isPreferenceButtonShown: boolean;
  
  constructor(public dialog: MatDialog) 
  {
    this.signAction = signInUp;
    this.$signAction = of(this.signAction);
    this.isPreferenceButtonShown = false;
  }

   OpenSignUserDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    
    let dialogRef = this.dialog.open(SignUser, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      if(result.signAction === 'Logged in')
      {
        this.signAction = signOut;
        console.log('Logged in');
        this.isPreferenceButtonShown = true;
      }
      console.log(result);
    });
  }

  OnSignClick() {
    if(this.signAction === signInUp)
    {
      this.OpenSignUserDialog();
    }
    else
    {
      this.SignOut();
    }
  }

  IsPreferenceButtonShown(): boolean
  {
    return this.isPreferenceButtonShown;
  }

  SignOut() {
    localStorage.removeItem('token');
    this.signAction = signInUp;
    this.isPreferenceButtonShown = false;
  }
}
