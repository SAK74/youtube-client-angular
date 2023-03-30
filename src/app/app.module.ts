import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { AppComponent } from './app.component';
import { UserBlockComponent } from './header/user-block/user-block.component';
import { HeaderComponent } from './header/header/header.component';
import { InputBlockComponent } from './header/input-block/input-block.component';
import { SettingsComponent } from './header/settings/settings.component';
import { FilteringComponent } from './header/filtering/filtering.component';
import { ResultsListComponent } from './search-panel/results-list/results-list.component';
import { ResultItemComponent } from './search-panel/result-item/result-item.component';
import { FooterDirective } from './search-panel/result-item/footer.directive';
import {
  FilterByDate,
  FilterByViews,
  FilterByWordPipe,
} from './search-panel/results-list/filtering.pippe';
import { HttpClientModule } from '@angular/common/http';
import { ShowListService } from './services/show-list.service';
import { SortService } from './services/search-sort.service';

@NgModule({
  declarations: [
    AppComponent,
    UserBlockComponent,
    HeaderComponent,
    InputBlockComponent,
    SettingsComponent,
    FilteringComponent,
    ResultsListComponent,
    ResultItemComponent,
    FooterDirective,
    FilterByWordPipe,
    FilterByDate,
    FilterByViews,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule,
    FormsModule,
    MatButtonModule,
    HttpClientModule,
  ],
  providers: [SortService, ShowListService],
  bootstrap: [AppComponent],
})
export class AppModule {}
