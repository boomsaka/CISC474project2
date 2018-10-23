import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApodsComponent } from './apods/apods.component';


const routes: Routes = [
  {path: '', redirectTo: 'apods', pathMatch: 'full'},
  {path: 'apods', component: ApodsComponent },
//   {path: 'track', component: TracksComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }