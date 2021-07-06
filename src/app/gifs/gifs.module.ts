import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './gifs-page/gifs-page.component';
import { SearchComponent } from './search/search.component';
import { ResultsComponent } from './results/results.component';
import { GifviewComponent } from './gifview/gifview.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    MainPageComponent,
    SearchComponent,
    ResultsComponent,
    GifviewComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    MainPageComponent
  ]
})
export class GifsModule { }
