import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material.module';
import { FilteringComponent } from './components/header/filtering/filtering.component';
import { HeaderComponent } from './components/header/header/header.component';
import { InputBlockComponent } from './components/header/input-block/input-block.component';
import { SettingsComponent } from './components/header/settings/settings.component';
import { UserBlockComponent } from './components/header/user-block/user-block.component';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    RouterModule,
    MatMenuModule,
    ReactiveFormsModule,
  ],
  declarations: [
    UserBlockComponent,
    HeaderComponent,
    InputBlockComponent,
    SettingsComponent,
    FilteringComponent,
  ],
  exports: [HeaderComponent],
})
export class CoreModule {}
