import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddShiftComponent } from './add-shift.component';

const routes: Routes = [
  { path: '', component: AddShiftComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
