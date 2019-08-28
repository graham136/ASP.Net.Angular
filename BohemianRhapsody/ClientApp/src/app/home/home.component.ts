import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',  
  styleUrls: ['./home.component.scss']
  
})
export class HomeComponent {
  constructor(public router: Router)
  {

  }

  // Route to Artists
  onArtists() {
    this.router.navigateByUrl("/artist-list");
  }

  // Route to Songs
  onSongs() {
    this.router.navigateByUrl("/song-list");
  }

  // Route to Genre
  onGenre() {
    this.router.navigateByUrl("/genre-list");
  }

  // Route to Albums
  onAlbums() {
    this.router.navigateByUrl("/album-list");
  }
}
