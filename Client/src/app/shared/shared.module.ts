import { NgModule } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { CommonModule } from '@angular/common';
import { ButtonSelection } from './components/button-selection/button-selection.component'

@NgModule({
  declarations: [ButtonSelection],
  exports: [ButtonSelection],
  imports: [CommonModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class SharedModule { }
