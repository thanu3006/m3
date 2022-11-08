import { Component, OnInit } from '@angular/core';
import { MusicService } from '../../music.service'; 
@Component({
  selector: 'music-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  musicList: Array<any>;
  constructor(private musicService: MusicService) { 

    
  }

  ngOnInit() {
    
  }

  onEnter(searchKey) {
    
    this.musicService.searchMusic(searchKey).subscribe((data) => {
      console.log(data['search']['data']['tracks']);
      this.musicList = data['search']['data']['tracks'];
    
    });
  }

}
