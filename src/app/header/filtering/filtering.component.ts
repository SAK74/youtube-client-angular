import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filtering',
  templateUrl: './filtering.component.html',
  styleUrls: ['./filtering.component.scss'],
})
export class FilteringComponent {
  @Output() dateFilter = new EventEmitter();
  @Output() countFilter = new EventEmitter();
  dateClick() {
    this.dateFilter.emit();
  }
  countClick() {
    this.countFilter.emit();
  }
}
