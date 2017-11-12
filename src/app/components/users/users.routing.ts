import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersComponent } from './users.component';

const routes: Routes = [
  { path: '', component: UsersComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);