import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../material.module';
import { FooterDirective } from './components/result-item/footer.directive';
import { ResultItemComponent } from './components/result-item/result-item.component';
import { ResultsListComponent } from './pages/results-list/results-list.component';
import {
  FilterByDatePipe,
  FilterByViewsPipe,
  FilterByWordPipe,
} from './pipes/filtering.pippe';

@NgModule({
  imports: [CommonModule, MaterialModule],
  declarations: [
    ResultsListComponent,
    ResultItemComponent,
    FooterDirective,
    FilterByDatePipe,
    FilterByViewsPipe,
    FilterByWordPipe,
  ],
  exports: [ResultsListComponent],
})
export class YouTobeModule {}
