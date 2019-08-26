import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

// Model Imports
import { Artist } from 'Models/Artist';

// Serivce Imports
import { ArtistService } from 'Services/artist.service';

@Component({
  selector: 'app-artist-view',
  templateUrl: './artist-view.component.html'
})
export class ArtistViewComponent {
  public artists: Artist[];
  public artist: Artist;

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string,
    public artistService: ArtistService,
    public router: Router) {

    this.artist = artistService.currentArtist;
  }

  // Function to route back to artists
  onBackClick() {
    this.router.navigateByUrl('/artist-list');
  }
}

