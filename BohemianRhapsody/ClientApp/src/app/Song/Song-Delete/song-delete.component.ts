import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

// Model Imports
import { Song } from 'Models/Song';

// Serivce Imports
import { SongService } from 'Services/song.service';

@Component({
  selector: 'app-song-delete',
  templateUrl: './song-delete.component.html'
})
export class SongDeleteComponent {
  public songs: Song[];
  public song: Song;
  public deleteSong: boolean;

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string,
    public songService: SongService,
    public router: Router) {

    this.songService.SongCanDeleteItem(this.songService.currentSong.songId).subscribe(
      (result: boolean) => {
        this.deleteSong = result;
      });

    this.song = this.songService.currentSong;
  }

  // Function to route back without deleting song
  onBackClick() {
    this.router.navigateByUrl('/song-list');
  }

  // Function to route back to songs after deleting selected song
  onDeleteClick() {
    this.songService.SongDeleteItem(this.song.songId).subscribe(
      (result: Song) => {
        this.song = result;
        this.router.navigateByUrl('/song-list');
      });    
  }
}

