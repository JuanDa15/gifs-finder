import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { waitForAsync } from '@angular/core/testing';
import { Data } from '../interface/gif.interface';
import { GifService } from '../services/gif.service';

@Component({
  selector: 'app-gifview',
  templateUrl: './gifview.component.html',
  styleUrls: ['./gifview.component.scss']
})
export class GifviewComponent implements OnInit {

  information:any = {};
  url:string = '';
  notification:boolean = false

  constructor(private gifservice:GifService) { }

  ngOnInit(): void {
    this.loadInfo();
  }

  loadInfo():void{
    this.gifservice.get().subscribe(
      resp=>{
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
