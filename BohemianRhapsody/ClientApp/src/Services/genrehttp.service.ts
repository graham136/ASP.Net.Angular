//Angular imports
import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

// Models
import { Genre } from 'Models/Genre';

@Injectable()
export class GenreHttpService {

  //Setup the api url to receive data from the node.js server

  private genreRoute: string = 'api/genre/';
  private baseUrl: string;
  private endPoint: string;

  constructor(private httpClient: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  /**
   * Function to retrieve the genre values from the api endpoints.
   * The function is used by genreservice to retrieve the genre values and
   *  store them
   */
  GenreList() {
    this.endPoint = this.baseUrl + this.genreRoute + 'GenreGetAllItems';
    return this.httpClient.get<Genre[]>(this.endPoint, { observe: 'response' })
      .pipe(
        map(response => {
          return response.body;
        })
      );
  }

  /**
   * Function to add an genre to the api
   * @param _genre The genre to be added
   */
  GenreAdd(_genre: Genre) {
    this.endPoint = this.baseUrl + this.genreRoute + 'GenreAddItem';
    return this.httpClient.post<Genre>(this.endPoint, _genre, { observe: 'response' })
      .pipe(
        map(response => {
          if (response.status === 200) {
            return response.body;
          }
        })
      );
  }

  /**
   * Function to update an genre to the api
   * @param _genre The genre to be updated
   */
  GenreUpdate(_genre: Genre) {
    this.endPoint = this.baseUrl + this.genreRoute + 'GenreUpdateItem';
    return this.httpClient.put<Genre>(this.endPoint, _genre, { observe: 'response' })
      .pipe(
        map(response => {
          if (response.status === 200) {
            return response.body;
          }
        })
      );
  }

  /**
   * Function to delete an genre from the api
   * @param _genreId - The genreid to be deleted
   */
  GenreDelete(_genreId: number) {
    this.endPoint = this.baseUrl + this.genreRoute + 'GenreDeleteItem?Id=' + _genreId;
    return this.httpClient.delete<Genre>(this.endPoint, { observe: 'response' })
      .pipe(
        map(response => {
          if (response.status === 200) {
            return response.body;
          }
        })
      );
  }

  /**
   * Function to determine if we delete an genre from the api as it is not refrenced anymore
   * @param _genreId - The genreid to be deleted
   */
  GenreCanDelete(_genreId: number) {
    this.endPoint = this.baseUrl + this.genreRoute + 'GenreCanDeleteItem?Id=' + _genreId;
    return this.httpClient.delete<boolean>(this.endPoint, { observe: 'response' })
      .pipe(
        map(response => {
          if (response.status === 200) {
            return response.body;
          }
        })
      );
  }

}
