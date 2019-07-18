import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrganismsRoutingModule } from './organisms-routing.module';
import { GeneralComponent } from './general/general.component';
import { NavComponent } from './nav/nav.component';
import { ArticleComponent } from './article/article.component';

const declarations = [
  NavComponent,
  GeneralComponent,
  ArticleComponent
];

@NgModule({
  declarations: declarations,
  imports: [
    CommonModule,
    OrganismsRoutingModule
  ],
  exports: declarations
})
export class OrganismsModule { }
