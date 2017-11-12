import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { UsersComponent }   from './users.component';
import { routing } from './users.routing';

@NgModule({
  imports: [CommonModule, routing],
  declarations: [UsersComponent]
})
export class UsersModule {}