import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { MainComponent } from './main/main.component';

const routes: Routes = [
  {path: '', redirectTo: 'main', pathMatch: 'full'},
  {path: 'main', component: MainComponent },
  {path: 'add-shift', loadChildren: './add-shift/add-shift.module#AddShiftModule'}
];
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
