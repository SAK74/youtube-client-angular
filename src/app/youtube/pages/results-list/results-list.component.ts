import { Component, OnInit, OnDestroy } from '@angular/core';

// import response from '../../services/loader';
import { ItemType } from '../../models/item.model';
import { SortService } from '../../services/search-sort.service';
import { ShowListService } from '../../services/show-list.service';
import { RequestService } from '../../services/http-service';
import { Subject, takeUntil } from 'rxjs';
import { SearchService } from '../../services/search-video.service';

@Component({
  selector: 'app-results-list',
  templateUrl: './results-list.component.html',
  styleUrls: ['./results-list.component.scss'],
  providers: [RequestService],
})
export class ResultsListComponent implements OnInit, OnDestroy {
  results: ItemType[] = [];
  searchText = '';
  constructor(
    public sortService: SortService,
    public listShow: ShowListService,
    private request: RequestService,
    public searchServ: SearchService
  ) {
    // this.results = response.items;
    searchServ.$inputObserver
      ?.pipe(takeUntil(this.destroyer))
      .subscribe((text) => {
        this.searchText = text;
        this.results = [];
        this.showList();
      });
    this.searchText = searchServ.searchText;
  }
  ngOnInit(): void {
    if (this.searchText) {
      this.showList();
    }
  }
  destroyer = new Subject<void>();
  ngOnDestroy(): void {
    this.searchServ.searchText = this.searchText;
    this.destroyer.next();
    this.destroyer.complete();
  }

  showList() {
    this.request.searchList(this.searchText).subscribe((searchRes) => {
      searchRes.items.forEach(({ id }) =>
        this.request.getVideo(id.videoId).subscribe((res) => {
          this.results.push(res.items[0]);
        })
      );
    });
  }
}
