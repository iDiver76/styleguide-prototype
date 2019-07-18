import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GeneralComponent } from './general/general.component';
import { ArticleComponent } from './article/article.component';

const routes: Routes = [
  { path: 'general', component: GeneralComponent },
  { path: 'article', component: ArticleComponent },
  { path: '', redirectTo: 'general', pathMatch: 'full' }
 ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrganismsRoutingModule { }
