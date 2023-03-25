import { Component } from '@angular/core';
import response from './services/loader';

export type SortType = false | 'inc' | 'dec';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'youtube-client-app';
  showSearch = false;
  constructor() {
    console.log(response);
    // data=from(data)
    // this.data.subscribe(console.log);
  }
  handleSearchSubmit() {
    this.showSearch = true;
  }
  dateSort: SortType = false;
  dateSortClick() {
    this.dateSort = this.dateSort === 'dec' ? 'inc' : 'dec';
    console.log('date click: ', this.dateSort);
  }
  viewSort: SortType = false;
  viewSortClick() {
    this.viewSort = this.viewSort === 'dec' ? 'inc' : 'dec';
  }
}
