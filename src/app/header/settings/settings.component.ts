import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent {
  @Output() onClick = new EventEmitter();
  // constructor(iconRegistry:Mat)
  handleClick() {
    this.onClick.emit();
  }
}
