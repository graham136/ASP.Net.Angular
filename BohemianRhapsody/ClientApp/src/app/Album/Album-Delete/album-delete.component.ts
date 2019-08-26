import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

// Model Imports
import { Album } from 'Models/Album';

// Serivce Imports
import { AlbumService } from 'Services/album.service';

@Component({
  selector: 'app-album-delete',
  templateUrl: './album-delete.component.html'
})
export class AlbumDeleteComponent {
  public albums: Album[];
  public album: Album;
  public deleteAlbum: boolean;

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string,
    public albumService: AlbumService,
    public router: Router) {

    this.albumService.AlbumCanDeleteItem(this.albumService.currentAlbum.albumId).subscribe(
      (result: boolean) => {
        this.deleteAlbum = result;
      });

    this.album = this.albumService.currentAlbum;
  }

  // Function to route back without deleting album
  onBackClick() {
    this.router.navigateByUrl('/album-list');
  }

  // Function to route back to albums after deleting selected album
  onDeleteClick() {
    this.albumService.AlbumDeleteItem(this.album.albumId).subscribe(
      (result: Album) => {
        this.album = result;
        this.router.navigateByUrl('/album-list');
      });    
  }
}

