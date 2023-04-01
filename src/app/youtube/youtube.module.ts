import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../material.module';
import { ResultItemComponent } from './components/result-item/result-item.component';
import { ResultsListComponent } from './pages/results-list/results-list.component';
import { FooterDirective } from './directives/item-footer.directive';
import {
  FilterByDatePipe,
  FilterByViewsPipe,
  FilterByWordPipe,
} from './pipes/filtering.pippe';
import { You2BeRoutingModule } from './you2be-routing.module';
import { DetailedComponent } from './pages/detailed-page/datailed.component';

@NgModule({
  imports: [CommonModule, MaterialModule, You2BeRoutingModule],
  declarations: [
    ResultsListComponent,
    ResultItemComponent,
    FooterDirective,
    FilterByDatePipe,
    FilterByViewsPipe,
    FilterByWordPipe,
    DetailedComponent,
  ],
})
export class YouTobeModule {}
