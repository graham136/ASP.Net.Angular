//Angluar Imports
import { Injectable } from '@angular/core';
import { map, flatMap } from 'rxjs/operators';

// Services
import { SongHttpService } from './songhttp.service';

// Models
import { Song } from 'Models/Song';


@Injectable()
export class SongService {

  public songs: Song[];
  public currentSong: Song;

  constructor(public songHttpService: SongHttpService) {
  }
  /**
     *  Function to retrieve the song values from the songttpservice and
     *  store them
     */
  GetAllSongs() {
    return this.songHttpService.SongList()
      .pipe(
        map(songs => {
          if (songs) {
            this.songs = songs;
          }
          return songs;
        })
      );
  }

  // Function to add an song value
  SongAddItem(_song: Song) {

    return this.songHttpService.SongAdd(_song)
      .pipe(
        map(response => {
          return response;
        })
      );
  }

  // Function to update an song value
  SongUpdateItem(_song: Song) {

    return this.songHttpService.SongUpdate(_song)
      .pipe(
        map(response => {
          return response;
        })
      );
  }

  // Function to delete an song item
  SongDeleteItem(_songId: number) {

    return this.songHttpService.SongDelete(_songId)
      .pipe(
        map(response => {
          return response;
        })
      );
  }

  //Function to test if we can delete an item
  SongCanDeleteItem(_songId: number) {
    return this.songHttpService.SongCanDelete(_songId)
      .pipe(
        map(response => {
          return response;
        })
      );
  }


}
