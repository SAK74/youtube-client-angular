import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Output() searchSubmit = new EventEmitter();
  showFilter = false;
  setClick() {
    this.showFilter = !this.showFilter;
  }
  submitClick() {
    this.searchSubmit.emit();
  }
}
