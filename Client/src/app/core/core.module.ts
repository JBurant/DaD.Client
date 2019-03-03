import { NgModule } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { CommonModule } from '@angular/common';
import { AuthenticationService } from './services/backend/authentication/authentication.service';
import { TokenInterceptor } from './services/backend/authentication/token.interceptor';

@NgModule({
  declarations: [],
  exports: [],
  imports: [CommonModule],
  providers: [AuthenticationService],
  bootstrap: [AppComponent]
})
export class CoreModule { }
