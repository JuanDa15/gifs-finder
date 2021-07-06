import { Component, OnInit } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {


  constructor(private gifservice:GifsService) {
  }

  get history():string[]{
    return this.gifservice.history;
  }

  ngOnInit(): void {
  }


  search(query:string){
    document.querySelector<HTMLInputElement>('#searchbar')!.value = query;
    this.gifservice.searchGifs(query);
  }
}
