import { Component, Input } from '@angular/core';


@Component({
  selector: 'button-selection',
  templateUrl: './button-selection.html',
  styleUrls: ['./button-selection.scss']
})

export class ButtonSelection {
   @Input() name: string;
}
