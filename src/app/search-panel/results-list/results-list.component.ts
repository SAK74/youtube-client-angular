import { Component, Input } from '@angular/core';
import { SortType } from 'src/app/app.component';
import response from '../../services/loader';
import { ItemType } from '../item.model';
import { RespType } from '../list-response.model';

@Component({
  selector: 'app-results-list',
  templateUrl: './results-list.component.html',
  styleUrls: ['./results-list.component.scss'],
})
export class ResultsListComponent {
  @Input() dateSort!: SortType;
  @Input() viewSort!: SortType;
  results: ItemType[];
  constructor() {
    this.results = response.items;
    console.log(this.results.map((result) => result.snippet.title));
  }
  sortDataIncrease = true;
  // sortByDate() {
  //   this.results = this.results.sort((a, b) => {
  //     const exp =
  //       new Date(a.snippet.publishedAt).getTime() -
  //       new Date(b.snippet.publishedAt).getTime();
  //     return this.sortDataIncrease ? exp : -exp;
  //   });
  //   this.sortDataIncrease = !this.sortDataIncrease;
  // }
  // sortViewsInc = true;
  // sortByCountViews() {
  //   this.results = this.results.sort((a, b) => {
  //     const exp =
  //       Number(a.statistics.viewCount) - Number(b.statistics.viewCount);
  //     return this.sortViewsInc ? exp : -exp;
  //   });
  // }
}
