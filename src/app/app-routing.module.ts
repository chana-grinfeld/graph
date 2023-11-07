import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home';
import { GraphReport } from './graphReport/graphReport';

const routes: Routes = [
  { path: '', component: Home},
      { path: 'graphReport', component: GraphReport }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }