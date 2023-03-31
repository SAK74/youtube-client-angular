import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'youtube',
    loadChildren: () =>
      import('./youtube/youtube.module').then((module) => module.YouTobeModule),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'youtube',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
