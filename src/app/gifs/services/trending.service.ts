import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Gif, GifsSearchResponse } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class TrendingService {

  public gifsArray:Gif[] = [];

  constructor(private http:HttpClient){
    this.get();
  }

  get(){

    const params = new HttpParams()
            .set('api_key',environment.API);

            
    return this.http.get<GifsSearchResponse>(`${environment.gifsURL}/trending`,{params:params}).subscribe(
      resp => {
        this.gifsArray = resp.data;
      }
    );
  }
}
