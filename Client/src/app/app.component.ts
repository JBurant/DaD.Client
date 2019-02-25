import { Component } from '@angular/core';
import { SignUser } from 'src/app/modules/users/dialogs/components/signuser/signuser.component';
import {MatDialog, MatDialogConfig} from "@angular/material";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'client';
  public signAction: string;
  private isPreferenceButtonShown: boolean;
  
  constructor(public dialog: MatDialog) 
  {
    this.signAction = "Sign In/Sign Up";
    this.isPreferenceButtonShown = false;
  }

   OpenSignUserDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    
    let dialogRef = this.dialog.open(SignUser, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

  OnSignClick()
  {
    this.OpenSignUserDialog();
  }

  IsPreferenceButtonShown(): boolean
  {
    return this.isPreferenceButtonShown;
  }
}
