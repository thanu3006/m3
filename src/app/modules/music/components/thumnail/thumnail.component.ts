import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'music-thumnail',
  templateUrl: './thumnail.component.html',
  styleUrls: ['./thumnail.component.css']
})
export class ThumnailComponent implements OnInit {
  @Input()
  music : any;
  @Output()
  addMusic = new EventEmitter();
  @Output()
  deleteMusic=new EventEmitter();
  @Input()
  favCheck :boolean;

  constructor() { }

  ngOnInit() {

  }

  addToFavouriteList()
  {
    this.addMusic.emit(this.music);
  }
  deleteMusicFav(){
    console.log(this.music);
    this.deleteMusic.emit(this.music);

    }


}
