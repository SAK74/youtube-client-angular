import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ShowListService {
  listShowed = false;
  listShow() {
    this.listShowed = true;
  }
}
