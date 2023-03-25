import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { UserBlockComponent } from './header/user-block/user-block.component';
import { HeaderComponent } from './header/header/header.component';
import { InputBlockComponent } from './header/input-block/input-block.component';
import { SettingsComponent } from './header/settings/settings.component';
import { FilteringComponent } from './header/filtering/filtering.component';
import { ResultsListComponent } from './search-panel/results-list/results-list.component';
import { ResultItemComponent } from './search-panel/result-item/result-item.component';
import { FooterDirective } from './search-panel/result-item/footer.directive';

import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
