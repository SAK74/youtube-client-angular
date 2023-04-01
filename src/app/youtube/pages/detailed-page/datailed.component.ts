import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemType } from '../../models/item.model';
import loader from '../../services/loader';

@Component({
  selector: '<detailed-component>',
  templateUrl: './detailed.component.html',
  styleUrls: ['detailed.component.scss'],
})
export class DetailedComponent {
  id: string = '';
  item: ItemType | null = null;
  constructor(private route: ActivatedRoute) {
    route.params.subscribe(({ itemId }) => {
      this.id = itemId;
      let item: ItemType | undefined;
      if ((item = loader.items.find((item) => item.id === this.id))) {
        this.item = item;
      }
    });
  }
}
