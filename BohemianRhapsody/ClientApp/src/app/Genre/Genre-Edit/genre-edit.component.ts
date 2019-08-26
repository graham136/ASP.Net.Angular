import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

// Model Imports
import { Genre } from 'Models/Genre';

// Serivce Imports
import { GenreService } from 'Services/genre.service';

@Component({
  selector: 'app-genre-edit',
  templateUrl: './genre-edit.component.html'
})
export class GenreEditComponent {
  public genres: Genre[];
  public genre: Genre;
  public tempGenre: string;

  myForm = new FormGroup({});

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string,
    public genreService: GenreService,
    public router: Router,
    public formBuilder: FormBuilder) {

    this.genre = genreService.currentGenre;

    this.myForm = formBuilder.group({
      'genreName': [this.genre.genreName, [Validators.required]]
    });
  }

  // Function to route back to genre without save edited genre
  onBackClick() {
    this.router.navigateByUrl('/genre-list');
  }

  // Function to save edited genre and route back to genres
  onSaveClick() {

    this.tempGenre = this.myForm.controls.genreName.value;
    this.genre.genreName = this.tempGenre;
    
    this.genreService.GenreUpdateItem(this.genre).subscribe(
      (result: Genre) => {
        this.genre = result;
        this.router.navigateByUrl('/genre-list');
      });
    
  }
}

