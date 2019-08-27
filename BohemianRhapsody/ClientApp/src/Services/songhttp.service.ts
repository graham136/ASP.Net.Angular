//Angular imports
import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

// Models
import { Song } from 'Models/Song';

@Injectable()
export class SongHttpService {

  //Setup the api url to receive data from the node.js server

  private songRoute: string = 'api/song/';
  private baseUrl: string;
  private endPoint: string;

  constructor(private httpClient: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  /**
   * Function to retrieve the song values from the api endpoints.
   * The function is used by songservice to retrieve the song values and
   *  store them
   */
  SongList() {
    this.endPoint = this.baseUrl + this.songRoute + 'SongGetAllItems';
    return this.httpClient.get<Song[]>(this.endPoint, { observe: 'response' })
      .pipe(
        map(response => {
          return response.body;
        })
      );
  }

  /**
   * Function to add an song to the api
   * @param _song The song to be added
   */
  SongAdd(_song: Song) {
    this.endPoint = this.baseUrl + this.songRoute + 'SongAddItem';
    return this.httpClient.post<Song>(this.endPoint, _song, { observe: 'response' })
      .pipe(
        map(response => {
          if (response.status === 200) {
            return response.body;
          }
        })
      );
  }

  /**
   * Function to update an song to the api
   * @param _song The song to be updated
   */
  SongUpdate(_song: Song) {
    this.endPoint = this.baseUrl + this.songRoute + 'SongUpdateItem';
    return this.httpClient.put<Song>(this.endPoint, _song, { observe: 'response' })
      .pipe(
        map(response => {
          if (response.status === 200) {
            return response.body;
          }
        })
      );
  }

  /**
   * Function to delete an song from the api
   * @param _songId - The songid to be deleted
   */
  SongDelete(_songId: number) {
    this.endPoint = this.baseUrl + this.songRoute + 'SongDeleteItem?Id=' + _songId;
    return this.httpClient.delete<Song>(this.endPoint, { observe: 'response' })
      .pipe(
        map(response => {
          if (response.status === 200) {
            return response.body;
          }
        })
      );
  }

  /**
   * Function to determine if we delete an song from the api as it is not refrenced anymore
   * @param _songId - The songid to be deleted
   */
  SongCanDelete(_songId: number) {
    this.endPoint = this.baseUrl + this.songRoute + 'SongCanDeleteItem?Id=' + _songId;
    return this.httpClient.get<boolean>(this.endPoint, { observe: 'response' })
      .pipe(
        map(response => {
          if (response.status === 200) {
            return response.body;
          }
        })
      );
  }

}
