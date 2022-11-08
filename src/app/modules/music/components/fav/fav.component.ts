import { Component, OnInit } from '@angular/core';

import { MatSnackBar } from '@angular/material';
import { FavouriteService } from '../favourite.service';
@Component({
  selector: 'music-fav',
  templateUrl: './fav.component.html',
  styleUrls: ['./fav.component.css']
})
export class FavComponent implements OnInit {
  musicList : Array<any>;
  favCheck=true;
  message:string;
  
  constructor(private Favourite: FavouriteService, private snackBar : MatSnackBar) {
    this.musicList = [];
 
   }

  ngOnInit() {
    this.Favourite.getFavouriteMusicList().subscribe((data)=>{
      this.musicList.push(...data);
    },
    error =>{
     this.snackBar.open(error['error'], '', {
      duration : 2000
    });
   });

  }

}
