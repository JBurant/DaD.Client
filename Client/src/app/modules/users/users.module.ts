import { NgModule } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { CommonModule } from '@angular/common';
import { MatDialogModule, MatFormFieldModule, MatInputModule, MatButtonModule } from "@angular/material";
import { SignUser } from './dialogs/components/signuser/signuser.component';
import { FormsModule } from '@angular/forms';
import { BackendService } from 'src/app/core/services/backend/api/backend.service';

@NgModule({
  declarations: [SignUser],
  exports: [SignUser],
  imports: [    
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    CommonModule],
  providers: [BackendService],
  bootstrap: [AppComponent],
  entryComponents: [SignUser],
})
export class UsersModule { }
