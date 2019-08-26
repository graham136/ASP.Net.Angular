import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

// Model Imports
import { Album } from 'Models/Album';

// Serivce Imports
import { AlbumService } from 'Services/album.service';

@Component({
  selector: 'app-album-view',
  templateUrl: './album-view.component.html'
})
export class AlbumViewComponent {
  public albums: Album[];
  public album: Album;

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string,
    public albumService: AlbumService,
    public router: Router) {

    this.album = albumService.currentAlbum;
  }

  // Function to route back to albums
  onBackClick() {
    this.router.navigateByUrl('/album-list');
  }
}

