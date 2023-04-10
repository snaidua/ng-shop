import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdsComponent, CartComponent } from './pages';

const routes: Routes = [

  { path: "prods", component: ProdsComponent},
  { path: "cart", component: CartComponent},
  { path: "", pathMatch: "full", redirectTo: "prods" }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
