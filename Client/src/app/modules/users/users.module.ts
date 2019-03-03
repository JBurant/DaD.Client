import { NgModule } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { CommonModule } from '@angular/common';
import { MatDialogModule, MatFormFieldModule, MatInputModule, MatButtonModule } from "@angular/material";
import { SignUser } from './dialogs/components/signuser/signuser.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BackendService } from 'src/app/core/services/backend/api/backend.service';
import { AuthenticationService } from 'src/app/core/services/backend/authentication/authentication.service';

@NgModule({
  declarations: [SignUser],
  exports: [SignUser],
  imports: [    
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule],
  providers: [
    BackendService,
    AuthenticationService
  ],
  bootstrap: [AppComponent],
  entryComponents: [SignUser],
})
export class UsersModule { }
