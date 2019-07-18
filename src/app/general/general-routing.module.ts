import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AtomicDesignComponent } from './atomic-design/atomic-design.component';

const routes: Routes = [
  { path: 'atomic-design', component: AtomicDesignComponent },
  { path: '', redirectTo: 'atomic-design', pathMatch: 'full' }
 ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeneralRoutingModule { }
