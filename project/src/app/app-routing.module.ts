import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { XyzComponent } from './xyz/xyz.component';
import { AbcComponent } from './uk/abc/abc.component';
import { EmpComponent } from './guest/emp/emp.component';
import { NewsComponent } from './news/news.component';

const routes: Routes = [
  {path:'Home' , component:XyzComponent},
  {path:'About' , component:AbcComponent},
  {path:'Contact' , component:EmpComponent},
  {path:'News',component:NewsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
