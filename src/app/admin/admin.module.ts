import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../material.module';
import { AdminPageComponent } from './pages/admin-page.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

const routes: Routes = [
  {
    path: '',
    component: AdminPageComponent,
  },
];
@NgModule({
  declarations: [AdminPageComponent],
  imports: [
    RouterModule.forChild(routes),
    MaterialModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
})
export class AdminPageModule {}
