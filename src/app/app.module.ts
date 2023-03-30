import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { ResultsListComponent } from './search-panel/results-list/results-list.component';
import { ResultItemComponent } from './search-panel/result-item/result-item.component';
import {
  FilterByDate,
  FilterByViews,
  FilterByWordPipe,
} from './search-panel/results-list/filtering.pippe';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material.module';
import { CoreModule } from './core/core.module';
import { FooterDirective } from './search-panel/result-item/footer.directive';

@NgModule({
  declarations: [
    AppComponent,
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
    HttpClientModule,
    MaterialModule,
    CoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
