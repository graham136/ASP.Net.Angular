import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

// Model Imports
import { Genre } from 'Models/Genre';

// Serivce Imports
import { GenreService } from 'Services/genre.service';

@Component({
  selector: 'app-genre-delete',
  templateUrl: './genre-delete.component.html'
})
export class GenreDeleteComponent {
  public genres: Genre[];
  public genre: Genre;
  public genreDelete: boolean;

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string,
    public genreService: GenreService,
    public router: Router) {

    this.genreService.GenreCanDeleteItem(this.genreService.currentGenre.genreId).subscribe(
      (result: boolean) => {
        this.genreDelete = result;
      });

    this.genre = this.genreService.currentGenre;
  }

  // Function to route back without deleting genre
  onBackClick() {
    this.router.navigateByUrl('/genre-list');
  }

  // Function to route back to genres after deleting selected genre
  onDeleteClick() {
    this.genreService.GenreDeleteItem(this.genre.genreId).subscribe(
      (result: Genre) => {
        this.genre = result;
        this.router.navigateByUrl('/genre-list');
      });    
  }
}

