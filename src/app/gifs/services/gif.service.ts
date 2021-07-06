import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Data, Gifinfo } from '../interface/gif.interface';

@Injectable({
  providedIn: 'root'
})
export class GifService {

  public id:string = '';

  constructor(private http:HttpClient){
  }

  get(){
    if(sessionStorage.getItem('id')){
      this.id = sessionStorage.getItem('id')!;
    }
    
    const params = new HttpParams()
                  .set('api_key',environment.API)
                  .set('gif_id',this.id);

    return this.http.get<Gifinfo>(`${environment.gifsURL}/${this.id}`,{params});
  }
}
