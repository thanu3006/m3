import { Component, OnInit, Input} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MusicService } from '../../music.service';
import { FavouriteService } from '../favourite.service';

@Component({
  selector: 'music-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  @Input()
  musicList : Array<any>;

  @Input()
  favCheck :boolean;

  
  

  
  constructor(private Favourite: FavouriteService, private snackBar : MatSnackBar) {
   }


  ngOnInit() {

  }

  addToFavouriteList(music: any)
  {

    console.log(music);

    this.Favourite.addToMusic(music).subscribe(()=>{
      console.log(music.name);
      this.snackBar.open(music.name+'added to favlist', '', {
        duration : 2000
      });
    },error =>{
      this.snackBar.open(error['error'], '', {
       duration : 2000
     });
    });

  }


  deleteMusic(music ){
    this.Favourite.deleteFromFavouriteList(music).subscribe((data)=>{
    console.log(data);
  
    this.snackBar.open(music.name+' deleted', '', {
      duration : 2000
    });
    },error =>{
      const message=JSON.stringify(error.error.message);
      this.snackBar.open(message, '', {
       duration : 2000
     });
    });
    for( var i=0;i<this.musicList.length;i++){
      if(this.musicList[i].name===music.name){
        this.musicList.splice(i,1);
      }
    }
    
  }

}
