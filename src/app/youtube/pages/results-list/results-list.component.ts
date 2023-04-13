import { Component, OnDestroy } from '@angular/core';

import { ItemType } from '../../models/item.model';
import { SortService } from '../../services/search-sort.service';
import { Subject, takeUntil } from 'rxjs';
import { Store } from '@ngrx/store';
import { StoreType } from 'src/app/redux/state.models';
import { StoringService } from '../../services/storing-list.service';

@Component({
  selector: 'app-results-list',
  templateUrl: './results-list.component.html',
  styleUrls: ['./results-list.component.scss'],
  providers: [StoringService],
})
export class ResultsListComponent implements OnDestroy {
  results: ItemType[] = [];
  constructor(
    public sortService: SortService,

    private store: Store<StoreType>,
    private storedData: StoringService
  ) {
    store
      .select('you2BeCards')
      .pipe(takeUntil(this.destroyer))
      .subscribe((items) => {
        console.log('you2be in list, items: ', items);
        this.results = items;
      });
  }

  destroyer = new Subject<void>();
  ngOnDestroy(): void {
    this.destroyer.next();
    this.destroyer.complete();
  }
}
