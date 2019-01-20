import { NgModule } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { CommonModule } from '@angular/common';
import { BackendService } from './services/backend/backend.service';

@NgModule({
  declarations: [],
  exports: [],
  imports: [CommonModule],
  providers: [BackendService],
  bootstrap: [AppComponent]
})
export class CoreModule { }
