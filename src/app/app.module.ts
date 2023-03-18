import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserBlockComponent } from './header/user-block/user-block.component';
import { HeaderComponent } from './header/header/header.component';
import { InputBlockComponent } from './header/input-block/input-block.component';
import { SettingsComponent } from './header/settings/settings.component';
import { FilteringComponent } from './header/filtering/filtering.component';
import { ResultsListComponent } from './search-panel/results-list/results-list.component';
import { ResultItemComponent } from './search-panel/result-item/result-item.component';

@NgModule({
  declarations: [AppComponent, UserBlockComponent, HeaderComponent, InputBlockComponent, SettingsComponent, FilteringComponent, ResultsListComponent, ResultItemComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
