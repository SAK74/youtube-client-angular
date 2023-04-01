import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './404-page.component';
import { loginGuard } from './core/guards/login-guard';

const routes: Routes = [
  {
    path: 'youtube',
    loadChildren: () =>
      import('./youtube/youtube.module').then((module) => module.YouTobeModule),
    canActivate: [loginGuard],
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'auth',
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
