import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './allComps/home/home.component';
import { ParentComponent } from './allComps/parent/parent.component';
import { ProductsComponent } from './allComps/products/products.component';

const routes: Routes = [

  {
    path:'home', component:HomeComponent
  },
  {
    path:'products', component:ProductsComponent
  },
  {
    path:'parent', component:ParentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
