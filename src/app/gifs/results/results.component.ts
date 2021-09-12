import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TrendingService } from '../services/trending.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  constructor(private trendingservice:TrendingService,private router:Router) {
  }

  get gifsArray(){
    return this.trendingservice.gifsArray;
  }


  ngOnInit(): void {
    this.trendingservice.gifsArray;
  }
}
