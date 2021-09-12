import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Data, Gifinfo } from '../interface/gif.interface';

@Injectable({
  providedIn: 'root'
})
export class GifService {


  constructor(private http:HttpClient){
  }

  get(id:string){
  
    
    const params = new HttpParams()
                  .set('api_key',environment.API)
                  .set('gif_id',id);

    return this.http.get<Gifinfo>(`${environment.gifsURL}/${id}`,{params});
  }
}
