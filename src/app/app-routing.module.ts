import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GifviewComponent } from './gifs/gifview/gifview.component';

const routes: Routes = [
  // {path:'',component:AppComponent},
  {path:'details/:id',component:GifviewComponent},
  {path:'**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
