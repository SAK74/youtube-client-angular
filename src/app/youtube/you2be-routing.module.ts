import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailedComponent } from './pages/detailed-page/detailed.component';
import { ResultsListComponent } from './pages/results-list/results-list.component';

const routes: Routes = [
  {
    path: '',
    component: ResultsListComponent,
  },
  {
    path: 'item/:itemId',
    component: DetailedComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class You2BeRoutingModule {}
