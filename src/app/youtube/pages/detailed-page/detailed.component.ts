import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
// import { selectItem } from 'src/app/redux/selectors/select-item.selector';
import { StoreType } from 'src/app/redux/state.models';
import { ItemType } from '../../models/item.model';
import { first, mergeMap } from 'rxjs';

@Component({
  selector: '<detailed-component>',
  templateUrl: './detailed.component.html',
  styleUrls: ['detailed.component.scss', '../../../global-styles.scss'],
})
export class DetailedComponent {
  item?: ItemType;
  constructor(private route: ActivatedRoute, private store: Store<StoreType>) {
    route.params
      .pipe(
        mergeMap(({ itemId }) =>
          store
            // .select(selectItem, { id: itemId })
            .select((state) =>
              state.you2BeCards.find((item) => item.id === itemId)
            )
        ),
        first()
      )
      .subscribe((item) => {
        this.item = item;
      });
  }
}
