import { Component, Input, OnInit } from '@angular/core';
import { ItemType } from '../item.model';

@Component({
  selector: 'app-result-item',
  templateUrl: './result-item.component.html',
  styleUrls: ['./result-item.component.scss'],
})
export class ResultItemComponent implements OnInit {
  @Input() item!: ItemType;
  ngOnInit(): void {
    // console.log(this.item);
  }
}
