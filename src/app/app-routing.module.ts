import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './404-page.component';
import { adminGuard } from './admin/guards/is-admin-routing.guard';
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
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminPageModule),
    canActivate: [adminGuard],
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
