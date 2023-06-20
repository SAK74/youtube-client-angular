import { Component, Input } from '@angular/core';
// import { SortType } from 'src/app/services/search-sort.model';
// import { SortService } from 'src/app/services/search-sort.service';
// import { ShowListService } from 'src/app/services/show-list.service';
// import response from '../../../services/loader';
import response from '../../services/loader';
import { ItemType } from '../../models/item.model';
// import { SortType } from '../../services/search-sort.model';
import { SortService } from '../../services/search-sort.service';
import { ShowListService } from '../../services/show-list.service';
// import { RespType } from '../list-response.model';

@Component({
  selector: 'app-results-list',
  templateUrl: './results-list.component.html',
  styleUrls: ['./results-list.component.scss'],
})
export class ResultsListComponent {
  results: ItemType[];
  constructor(
    public sortService: SortService,
    public listShow: ShowListService
  ) {
    this.results = response.items;
  }
}
