import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Data } from '../interface/gif.interface';
import { GifService } from '../services/gif.service';
import { switchMap, tap } from "rxjs/operators";

@Component({
  selector: 'app-gifview',
  templateUrl: './gifview.component.html',
  styleUrls: ['./gifview.component.scss']
})
export class GifviewComponent implements OnInit {

  information:any = {};
  url:string = '';
  id:string = '';
  notification:boolean = false

  constructor(private gifservice:GifService,
              private activatedRoute:ActivatedRoute){}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap((param) => this.gifservice.get(param.id))
      )
    .subscribe(
      resp => {
        this.information = resp.data;
        this.verifyURL(this.information);
      }
    )
  }

  verifyURL(data:Data):void{
    if(data.images.downsized_large){
      this.url = data.images.downsized_large.url;
    }else if(data.images.fixed_height_small_still){
      this.url = data.images.fixed_height_small_still.url;
    }else{
      this.url = data.images.original.url;
    }
  }


  copyURL():void{
    const url:HTMLInputElement = document.querySelector("#url")!;
    url.select();
    this.notification = document.execCommand("copy");
    setTimeout(()=>{
      this.notification = false;
    },1000);
  }
}
