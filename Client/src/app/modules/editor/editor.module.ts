import { NgModule } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { CommonModule } from '@angular/common';
import { Editor } from './components/editor/editor.component';
import { SharedModule } from 'src/app/shared/shared.module'

@NgModule({
  declarations: [Editor],
  exports: [Editor],
  imports: [CommonModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class EditorModule { }
