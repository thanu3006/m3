import { Injectable } from '@angular/core';
import { HttpBackend, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MusicService {
  api_key = 'ODE1MDk1MGUtNzQ2MC00NzljLWE5ZjQtMzliMjEwZmJhNjY0';
  springEndpoint : string;

  constructor(private http: HttpClient,handler: HttpBackend ) {
    this.http = new HttpClient(handler);
    
    this.springEndpoint = `http://localhost:8081/api/music`;
  }
  
  searchMusic(query: string) {
    return this.http.get<any>(`http://api.napster.com/v2.2/search?apikey=`+this.api_key+`&query=${query}`);
 }


 getTopMusic() {
  return this.http.get<any>(`https://api.napster.com/v2.2/tracks/top?limit=30&apikey=`+this.api_key);
}

}
