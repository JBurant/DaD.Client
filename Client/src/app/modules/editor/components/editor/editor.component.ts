import { Component } from '@angular/core';
import { ButtonSelection } from 'src/app/shared/components/button-selection/button-selection.component'

@Component({
  selector: 'editor',
  templateUrl: './editor.html',
  styleUrls: ['./editor.scss']
})

export class Editor {
  IsUploadVisible: boolean;
  constructor()
  {
    this.IsUploadVisible = false;
  }

  onUploadFile()
  {
    this.IsUploadVisible = (!this.IsUploadVisible);
  }
}
