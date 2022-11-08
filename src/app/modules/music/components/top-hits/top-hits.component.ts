import { Component, OnInit } from '@angular/core';
import { MusicService } from '../../music.service'; 
import { MatSnackBar } from '@angular/material';
@Component({
  selector: 'music-top-hits',
  templateUrl: './top-hits.component.html',
  styleUrls: ['./top-hits.component.css']
})
export class TopMusicComponent implements OnInit {
  musicList :any=[];

  constructor(private musicService: MusicService, private snackBar : MatSnackBar) {
    this.musicList = [];
   }

  ngOnInit() {
    this.musicService.getTopMusic().subscribe((data)=>{
      console.log(data.tracks);
      this.musicList = data['tracks'];
    
    },
    error =>{
     this.snackBar.open(error['error'], '', {
      duration : 2000
    });
   });
  }

}
