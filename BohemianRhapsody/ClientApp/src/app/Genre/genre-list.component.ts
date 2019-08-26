import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

// Model Imports
import { Genre } from 'Models/Genre';

// Serivce Imports
import { GenreService } from 'Services/genre.service';

@Component({
  selector: 'app-genre-list',
  templateUrl: './genre-list.component.html'
})
export class GenreListComponent {
  public genres: Genre[];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string,
    public genreService: GenreService,
    public router: Router) {

    /*
     *Standard Api Call abstracted to service layer Genre Service which calls Genre Http Service which does the call.
     * 
    http.get<Genre[]>(baseUrl + 'api/genre/genreGetAll').subscribe(result => {
      this.genres = result;
      console.log(this.genres);
    }, error => console.error(error));
    */
        
    this.genreService.GetAllGenres().subscribe(
      (result: Genre[]) => {
        this.genres = result;
      });
  }

  // Function to route to view genre detail page
  onViewClick(index :number) {
    this.genreService.currentGenre = this.genres[index];
    this.router.navigateByUrl('/genre-view');
  }

  // Function to route to edit genre detail page
  onEditClick(index: number) {
    this.genreService.currentGenre = this.genres[index];
    this.router.navigateByUrl('/genre-edit');
  }

  // Function to route to delete genre detail page
  onDeleteClick(index: number) {
    this.genreService.currentGenre = this.genres[index]
    this.router.navigateByUrl('/genre-delete');
  }

  // Function to route to add genre detail page
  onAddClick() {
    this.router.navigateByUrl('/genre-add');
  }
   
}

