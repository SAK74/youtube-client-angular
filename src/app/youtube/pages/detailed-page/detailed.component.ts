import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemType } from '../../models/item.model';
import { RequestService } from '../../services/http-service';
// import loader from '../../services/loader';

@Component({
  selector: '<detailed-component>',
  templateUrl: './detailed.component.html',
  styleUrls: ['detailed.component.scss'],
  providers: [RequestService],
})
export class DetailedComponent {
  item: ItemType | null = null;
  constructor(private route: ActivatedRoute, private request: RequestService) {
    route.params.subscribe(({ itemId }) => {
      // let item: ItemType | undefined;
      // if ((item = loader.items.find((item) => item.id === itemId))) {
      //   this.item = item;
      // }
      request.getVideo(itemId).subscribe(({ items }) => (this.item = items[0]));
    });
  }
}
