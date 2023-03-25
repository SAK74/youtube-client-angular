import { Component } from '@angular/core';
import response from '../../services/loader';
import { ItemType } from '../item.model';
import { RespType } from '../list-response.model';

@Component({
  selector: 'app-results-list',
  templateUrl: './results-list.component.html',
  styleUrls: ['./results-list.component.scss'],
})
export class ResultsListComponent {
  results: ItemType[];
  constructor() {
    this.results = response.items;
    console.log(this.results);
  }
}
