import { Injectable } from '@angular/core';
import { SortType } from './search-sort.model';

@Injectable()
export class SortService {
  dateSort: SortType = false;
  viewSort: SortType = false;
  filterValue = '';

  filterValSet(val: string) {
    this.filterValue = val;
  }

  dateSortChange() {
    this.dateSort = this.dateSort === 'dec' ? 'inc' : 'dec';
  }

  viewSortChange() {
    this.dateSort = this.dateSort === 'dec' ? 'inc' : 'dec';
  }
}
