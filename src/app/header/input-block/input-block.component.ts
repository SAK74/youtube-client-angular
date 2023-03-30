import { Component } from '@angular/core';
import { ShowListService } from 'src/app/services/show-list.service';

@Component({
  selector: 'app-input-block',
  templateUrl: './input-block.component.html',
  styleUrls: ['./input-block.component.scss'],
})
export class InputBlockComponent {
  constructor(private showList: ShowListService) {}
  handleClick() {
    this.showList.listShow();
  }
}
