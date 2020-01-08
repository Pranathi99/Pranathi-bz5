import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import{HomeComponent} from './home/home.component';
import{UserComponent} from './user/user.component';
import{CountryComponent} from './country/country.component';
import{ColorComponent} from './color/color.component';
const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'colors',component:ColorComponent},
  {path:'countries',component:CountryComponent},
  {path:'users',component:UserComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
