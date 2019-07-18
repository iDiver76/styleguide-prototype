import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

 const routes: Routes = [
  {
    path: 'general',
    loadChildren: () => import('./general/general.module').then(mod => mod.GeneralModule)
  },
  {
    path: 'organisms',
    loadChildren: () => import('./organisms/organisms.module').then(mod => mod.OrganismsModule)
  },
  {
    path: '',
    redirectTo: 'general',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { enableTracing: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
