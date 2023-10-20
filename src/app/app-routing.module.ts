import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicFormComponent } from './basic-form/basic-form.component';
import { MaterialFormComponent } from './material-form/material-form.component';


const routes: Routes = [
  {
    path:'reister',component:BasicFormComponent
  },
  {
    path:'matReister',component:MaterialFormComponent
  },
  {
    path:'*',component:BasicFormComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
