import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InterceptorService } from './interceptor.service';
import { SearchComponent } from './components/search/search.component';
import { ContainerComponent } from './components/container/container.component';
import { ThumnailComponent } from './components/thumnail/thumnail.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { FavComponent } from './components/fav/fav.component';
import { MusicService} from './music.service'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AuthGuardService } from 'src/app/auth-guard.service';
import { TopMusicComponent } from './components/top-hits/top-hits.component'; 

const musicRoutes: Routes = [
  {
      path : 'music',
      children : [
     
          {
              path : 'search',
              canActivate : [AuthGuardService],
              component : SearchComponent
          },
          {
            path : 'favourites',
            canActivate : [AuthGuardService],
            component : FavComponent
          },
          {
            path : 'top',
            canActivate : [AuthGuardService],
            component : TopMusicComponent
        },
      ]
  }
];
@NgModule({
  declarations: [SearchComponent, ContainerComponent, ThumnailComponent, FavComponent, TopMusicComponent],
  imports: [
    RouterModule.forChild(musicRoutes),
    SharedModule,
    HttpClientModule
  ],
  providers:[
    MusicService, {
      provide : HTTP_INTERCEPTORS,
      useClass :  InterceptorService,
      multi : true
    }
  ],
  exports :[
    SearchComponent, ContainerComponent, ThumnailComponent,TopMusicComponent
  ]
})
export class MusicModule { }
