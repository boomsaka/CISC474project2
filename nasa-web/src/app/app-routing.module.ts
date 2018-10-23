import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApodsComponent } from './apods/apods.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'apods', component: ApodsComponent },
  {path: 'home', component: HomeComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }