import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

// Model Imports
import { Song } from 'Models/Song';

// Serivce Imports
import { SongService } from 'Services/song.service';

@Component({
  selector: 'app-song-view',
  templateUrl: './song-view.component.html'
})
export class SongViewComponent {
  public songs: Song[];
  public song: Song;

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string,
    public songService: SongService,
    public router: Router) {

    this.song = songService.currentSong;
  }

  // Function to route back to songs
  onBackClick() {
    this.router.navigateByUrl('/song-list');
  }
}

