import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicFormComponent } from './basic-form/basic-form.component';


const routes: Routes = [
  {
    path:'**',component:BasicFormComponent
  },
  {
    path:'reister',component:BasicFormComponent
  },
  {
    path:'reister',component:BasicFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
