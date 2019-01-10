import { NgModule } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { CommonModule } from '@angular/common';
import { Editor } from './components/editor/editor.component';

@NgModule({
  declarations: [Editor],
  exports: [Editor],
  imports: [CommonModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class EditorModule { }
