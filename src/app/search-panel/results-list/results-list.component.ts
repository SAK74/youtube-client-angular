import { Component, Input } from '@angular/core';
import { SortType } from 'src/app/app.component';
import response from '../../services/loader';
import { ItemType } from '../item.model';
// import { RespType } from '../list-response.model';

@Component({
  selector: 'app-results-list',
  templateUrl: './results-list.component.html',
  styleUrls: ['./results-list.component.scss'],
})
export class ResultsListComponent {
  @Input() dateSort!: SortType;
  @Input() viewSort!: SortType;
  @Input() filterWord = '';
  results: ItemType[];
  constructor() {
    this.results = response.items;
    console.log(this.results.map((result) => result.snippet.title));
  }
  sortDataIncrease = true;
}
