import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// Model Imports
import { Genre } from 'Models/Genre';

@Component({
  selector: 'app-genre-list',
  templateUrl: './genre-list.component.html'
})
export class GenreListComponent {
  public genres: Genre[];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<Genre[]>(baseUrl + 'api/genre/genreGetAll').subscribe(result => {
      this.genres = result;
      console.log(this.genres);
    }, error => console.error(error));
  }
}

interface WeatherForecast {
  dateFormatted: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}
