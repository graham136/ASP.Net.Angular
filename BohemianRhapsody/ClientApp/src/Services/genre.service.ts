//Angluar Imports
import { Injectable } from '@angular/core';
import { map, flatMap } from 'rxjs/operators';

// Services
import { GenreHttpService } from './genrehttp.service';

// Models
import { Genre } from 'Models/Genre';


@Injectable()
export class GenreService {

  public genres: Genre[];
  public currentGenre: Genre;

  constructor(public genreHttpService: GenreHttpService) {
  }
  /**
     *  Function to retrieve the genre values from the genrettpservice and
     *  store them
     */
  GetAllGenres() {
    return this.genreHttpService.GenreList()
      .pipe(
        map(genres => {
          if (genres) {
            this.genres = genres;
          }
          return genres;
        })
      );
  }

  // Function to add an genre value
  GenreAddItem(_genre: Genre) {

    return this.genreHttpService.GenreAdd(_genre)
      .pipe(
        map(response => {
          return response;
        })
      );
  }

  // Function to update an genre value
  GenreUpdateItem(_genre: Genre) {

    return this.genreHttpService.GenreUpdate(_genre)
      .pipe(
        map(response => {
          return response;
        })
      );
  }

  // Function to delete an genre item
  GenreDeleteItem(_genreId: number) {

    return this.genreHttpService.GenreDelete(_genreId)
      .pipe(
        map(response => {
          return response;
        })
      );
  }

  //Function to test if we can delete an item
  GenreCanDeleteItem(_genreId: number) {
    return this.genreHttpService.GenreCanDelete(_genreId)
      .pipe(
        map(response => {
          return response;
        })
      );
  }


}
