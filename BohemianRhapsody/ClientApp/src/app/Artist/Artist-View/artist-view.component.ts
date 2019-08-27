import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

// Model Imports
import { Artist } from 'Models/Artist';
import { Album } from 'Models/Album';

// Serivce Imports
import { ArtistService } from 'Services/artist.service';
import { AlbumService } from 'Services/album.service';


@Component({
  selector: 'app-artist-view',
  templateUrl: './artist-view.component.html'
})
export class ArtistViewComponent {
  public artists: Artist[];
  public artist: Artist;
  public albums: Album[];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string,
    public artistService: ArtistService,
    public albumService: AlbumService,
    public router: Router) {

    this.artist = artistService.currentArtist;

    albumService.GetAllAlbums().subscribe(
      (result: Album[]) => {
        this.albums = result;
        this.albums = this.albums.filter(album => album.artistId == this.artist.artistId);
        if (this.albums.length == 0) {
          this.albums = null;
        }
      });

  }

  // Function to route back to artists
  onBackClick() {
    this.router.navigateByUrl('/artist-list');
  }

  // Function to route to view album detail page
  onViewClick(index: number) {
    this.albumService.currentAlbum = this.albums[index];
    this.router.navigateByUrl('/album-view');
  }

  // Function to route to edit album detail page
  onEditClick(index: number) {
    this.albumService.currentAlbum = this.albums[index];
    this.router.navigateByUrl('/album-edit');
  }

  // Function to route to delete album detail page
  onDeleteClick(index: number) {
    this.albumService.currentAlbum = this.albums[index]
    this.router.navigateByUrl('/album-delete');
  }
}

