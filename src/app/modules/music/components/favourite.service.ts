import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {MusicService} from '../music.service'

@Injectable({
  providedIn: 'root'
})
export class FavouriteService {


   api_key = 'ODE1MDk1MGUtNzQ2MC00NzljLWE5ZjQtMzliMjEwZmJhNjY0';
  springEndpoint : string;

  constructor(private http: HttpClient,handler: HttpBackend ) {
    
    
    this.springEndpoint = `http://localhost:8081/api/music`;
  }
  
  searchMusic(query: string) {
    return this.http.get<any>(`http://api.napster.com/v2.2/search?apikey=`+this.api_key+`&query=${query}`);
 }
  addToMusic(music)
 {
    console.log(music);
    return this.http.post(this.springEndpoint, music);
 }

 getFavouriteMusicList():Observable<Array<any>>
 {
    return this.http.get<Array<any>>(this.springEndpoint);
 }

 deleteFromFavouriteList(music)
 {
    return this.http.delete(this.springEndpoint + "/" + music.id,{responseType:'text'});
 }
}
