import { NgModule } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { CommonModule } from '@angular/common';
import { Editor } from './components/editor/editor.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [Editor],
  exports: [Editor],
  imports: [CommonModule, SharedModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class EditorModule { }
