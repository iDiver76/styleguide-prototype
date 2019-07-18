import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeneralRoutingModule } from './general-routing.module';
import { AtomicDesignComponent } from './atomic-design/atomic-design.component';
import { NavComponent } from './nav/nav.component';

const declarations = [
  AtomicDesignComponent,
  NavComponent
];

@NgModule({
  declarations: declarations,
  imports: [
    CommonModule,
    GeneralRoutingModule
  ],
  exports: declarations
})
export class GeneralModule { }
