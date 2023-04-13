import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { addYou2BeCardAction } from 'src/app/redux/actions/you2Be.actions';
import { StoreType } from 'src/app/redux/state.models';
import { RequestService } from './http-service';
import { SearchService } from '../../core/services/input-observer.service';

@Injectable()
export class StoringService {
  constructor(
    private observer: SearchService,
    private request: RequestService,
    private store: Store<StoreType>
  ) {
    observer.$inputObserver.subscribe((text) => {
      this.getItems(text);
    });
  }

  getItems(search: string) {
    this.request
      .searchList(search)
      .pipe(map((res) => res.items))
      .subscribe((items) => {
        items.forEach(({ id }) => {
          this.request.getVideo(id.videoId).subscribe((item) => {
            this.store.dispatch(addYou2BeCardAction(item.items[0]));
          });
        });
      });
  }
}
