import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-block',
  templateUrl: './input-block.component.html',
  styleUrls: ['./input-block.component.scss'],
})
export class InputBlockComponent {
  @Output() onSubmit = new EventEmitter();
  handleClick() {
    this.onSubmit.emit();
  }
}
