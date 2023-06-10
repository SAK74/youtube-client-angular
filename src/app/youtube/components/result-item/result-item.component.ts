import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemType } from '../../models/item.model';

@Component({
  selector: 'app-result-item',
  templateUrl: './result-item.component.html',
  styleUrls: ['./result-item.component.scss', '../../../global-styles.scss'],
})
export class ResultItemComponent implements OnInit {
  @Input() item!: ItemType;
  constructor(private router: Router, private route: ActivatedRoute) {}
  ngOnInit(): void {
    // console.log(this.item);
  }
  goToDetail() {
    this.router.navigate(['item', this.item.id], { relativeTo: this.route });
  }
}
