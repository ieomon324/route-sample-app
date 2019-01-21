import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { CoreComponent } from './core.component';
import { CrisisListComponent } from '../crisis/crisis-list/crisis-list.component';

@NgModule({
  declarations: [CoreComponent
    ,CrisisListComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule
  ]
})
export class CoreModule { }
