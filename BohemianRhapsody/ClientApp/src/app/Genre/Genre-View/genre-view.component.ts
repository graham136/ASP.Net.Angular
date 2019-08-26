import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

// Model Imports
import { Genre } from 'Models/Genre';

// Serivce Imports
import { GenreService } from 'Services/genre.service';

@Component({
  selector: 'app-genre-view',
  templateUrl: './genre-view.component.html'
})
export class GenreViewComponent {
  public genres: Genre[];
  public genre: Genre;

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string,
    public genreService: GenreService,
    public router: Router) {

    this.genre = genreService.currentGenre;
  }

  // Function to route back to genres
  onBackClick() {
    this.router.navigateByUrl('/genre-list');
  }
}

