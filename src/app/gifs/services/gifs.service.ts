import { HttpClient, HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment'
import { Gif, GifsSearchResponse } from '../interface/gifs.interface';
import { TrendingService } from './trending.service';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _history: string[] = [];
  public results: Gif[] = [];

  constructor(private http:HttpClient,private trendingservice:TrendingService){
    this._history = JSON.parse(localStorage.getItem('history')!) || [];
  }

  get history(){
    return [...this._history];
  }

  get result(){
    return [this.results];
  }

  searchGifs(query:string):void{
    if(this._history.length >= 10){
      this._history.pop();
    }else if(this._history.includes(query)){
      let index = this._history.indexOf(query);
      this._history.splice(index,1);
    }
    this._history.unshift(query);
    localStorage.setItem('history',JSON.stringify(this._history));
    this.get(query);
  }

  get(query:string){

    const params = new HttpParams()
                      .set('api_key',environment.API)
                      .set('q',query)
                      .set('limit','20');

    return this.http.get<GifsSearchResponse>(`${environment.gifsURL}/search`, {params:params})
    .subscribe(
      (resp) => {
        this.results = resp.data; 
        this.trendingservice.gifsArray = resp.data;
      })
  }
}
