import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Output() searchSubmit = new EventEmitter();
  @Output() dateSearch = new EventEmitter();
  @Output() countSearch = new EventEmitter();
  @Output() filterVal = new EventEmitter<string>();

  showFilter = false;
  setClick() {
    this.showFilter = !this.showFilter;
  }
  submitClick() {
    this.searchSubmit.emit();
  }
  dateClick() {
    this.dateSearch.emit();
  }
  countClick() {
    this.countSearch.emit();
  }
  filterValueChange(val: string) {
    this.filterVal.emit(val);
  }
}
