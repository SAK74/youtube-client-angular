import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResultsListComponent } from './pages/results-list/results-list.component';

const routes: Routes = [
  {
    path: '',
    component: ResultsListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  // exports: [RouterModule],
  // declarations:[]
})
export class You2BeRoutingModule {}
