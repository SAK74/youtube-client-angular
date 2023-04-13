import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SearchService } from 'src/app/core/services/input-observer.service';
import { filter, debounceTime } from 'rxjs';

@Component({
  selector: 'app-input-block',
  templateUrl: './input-block.component.html',
  styleUrls: ['./input-block.component.scss'],
})
export class InputBlockComponent {
  constructor(private searchServ: SearchService) {
    searchServ.$inputObserver = this.searchCtr.valueChanges.pipe(
      filter((text) => text.length >= 3),
      debounceTime(1000)
    );
  }
  searchCtr = new FormControl('', { nonNullable: true });
}
