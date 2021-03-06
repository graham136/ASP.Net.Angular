import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

// Model Imports
import { Album } from 'Models/Album';
import { Song } from 'Models/Song';

// Serivce Imports
import { AlbumService } from 'Services/album.service';
import { SongService } from 'Services/song.service';

@Component({
  selector: 'app-album-view',
  templateUrl: './album-view.component.html'
})
export class AlbumViewComponent {
  public albums: Album[];
  public album: Album;
  public songs: Song[];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string,
    public albumService: AlbumService,
    public songService: SongService,
    public router: Router) {

    this.album = albumService.currentAlbum;

    songService.GetAllSongs().subscribe(
      (result: Song[]) => {
        this.songs = result;
        this.songs = this.songs.filter(songs => songs.albumId == this.album.albumId);
        if (this.songs.length == 0) {
          this.songs = null;
        }
      });
  }

  // Function to route back to albums
  onBackClick() {
    this.router.navigateByUrl('/album-list');
  }

  // Function to route to view song detail page
  onViewClick(index: number) {
    this.songService.currentSong = this.songs[index];
    this.router.navigateByUrl('/song-view');
  }

  // Function to route to edit song detail page
  onEditClick(index: number) {
    this.songService.currentSong = this.songs[index];
    this.router.navigateByUrl('/song-edit');
  }

  // Function to route to delete song detail page
  onDeleteClick(index: number) {
    this.songService.currentSong = this.songs[index]
    this.router.navigateByUrl('/song-delete');
  }
}

