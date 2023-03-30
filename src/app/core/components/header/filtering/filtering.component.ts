import { Component } from '@angular/core';
import { SortService } from 'src/app/youtube/services/search-sort.service';

@Component({
  selector: 'app-filtering',
  templateUrl: './filtering.component.html',
  styleUrls: ['./filtering.component.scss'],
})
export class FilteringComponent {
  constructor(private sortService: SortService) {}
  dateClick() {
    this.sortService.dateSortChange();
  }
  countClick() {
    this.sortService.viewSortChange();
  }
  valueChange(value: string) {
    this.sortService.filterValSet(value);
  }
}
