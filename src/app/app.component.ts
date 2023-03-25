import { Component } from '@angular/core';
import response from './services/loader';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'youtube-client-app';
  showSearch = false;
  constructor() {
    console.log(response);
    // data=from(data)
    // this.data.subscribe(console.log);
  }
  handleSearchSubmit() {
    this.showSearch = true;
  }
}
