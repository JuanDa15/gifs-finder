import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';
import { TrendingService } from '../services/trending.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @ViewChild('searchText') searchText!:ElementRef<HTMLInputElement>;

  constructor(private gifservice:GifsService,private trendingservice:TrendingService){
  }

  ngOnInit(): void {
  }

  search():void{
    const query = this.searchText.nativeElement.value;
    if(query.trim().length != 0){
      this.gifservice.searchGifs(query.toLowerCase());
    }
  }

  verify(){
    if(this.searchText.nativeElement.value.trim().length === 0){
      this.trendingservice.get();
    }
  }
}
