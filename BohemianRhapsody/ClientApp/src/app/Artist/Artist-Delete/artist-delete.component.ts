import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

// Model Imports
import { Artist } from 'Models/Artist';

// Serivce Imports
import { ArtistService } from 'Services/artist.service';

@Component({
  selector: 'app-artist-delete',
  templateUrl: './artist-delete.component.html'
})
export class ArtistDeleteComponent {
  public artists: Artist[];
  public artist: Artist;
  public deleteArtist: boolean;

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string,
    public artistService: ArtistService,
    public router: Router) {

    this.artistService.ArtistCanDeleteItem(this.artistService.currentArtist.artistId).subscribe(
      (result: boolean) => {
        this.deleteArtist = result;
      });

    this.artist = this.artistService.currentArtist;
  }

  // Function to route back without deleting artist
  onBackClick() {
    this.router.navigateByUrl('/artist-list');
  }

  // Function to route back to artists after deleting selected artist
  onDeleteClick() {
    this.artistService.ArtistDeleteItem(this.artist.artistId).subscribe(
      (result: Artist) => {
        this.artist = result;
        this.router.navigateByUrl('/artist-list');
      });    
  }
}

