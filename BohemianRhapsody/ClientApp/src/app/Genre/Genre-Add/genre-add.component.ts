import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

// Model Imports
import { Genre } from 'Models/Genre';

// Serivce Imports
import { GenreService } from 'Services/genre.service';

@Component({
  selector: 'app-genre-add',
  templateUrl: './genre-add.component.html'
})
export class GenreAddComponent {
  public genres: Genre[];
  public genre: Genre;
  public tempGenre: string;

  myForm = new FormGroup({});

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string,
    public genreService: GenreService,
    public router: Router,
    public formBuilder: FormBuilder) {

    this.genre = new Genre();

    this.myForm = formBuilder.group({
      'genreName': ['', [Validators.required]]
    });
  }

  // Function to route back to genre list
  onBackClick() {
    this.router.navigateByUrl('/genre-list');
  }

  // Function to save current added genre
  onSaveClick() {

    this.tempGenre = this.myForm.controls.genreName.value;
    
    this.genre.genreName = this.tempGenre;
    
    this.genreService.GenreAddItem(this.genre).subscribe(
      (result: Genre) => {
        this.genre = result;
        this.router.navigateByUrl('/genre-list');
      });
    
  }
}

