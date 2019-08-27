//Angular imports
import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

// Models
import { Artist } from 'Models/Artist';

@Injectable()
export class ArtistHttpService {

  //Setup the api url to receive data from the node.js server

  private artistRoute: string = 'api/artist/';
  private baseUrl: string;
  private endPoint: string;

  constructor(private httpClient: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  /**
   * Function to retrieve the artist values from the api endpoints.
   * The function is used by artistservice to retrieve the artist values and
   *  store them
   */
  ArtistList() {
    this.endPoint = this.baseUrl + this.artistRoute + 'ArtistGetAllItems';
    return this.httpClient.get<Artist[]>(this.endPoint, { observe: 'response' })
      .pipe(
        map(response => {
          return response.body;
        })
      );
  }

  /**
   * Function to retrieve list of pre-added artist pictures. Obviously this can be expanded.
   * */
  ArtistPictureList() {
    this.endPoint = this.baseUrl + this.artistRoute + 'ArtistGetPictures';
    return this.httpClient.get<string[]>(this.endPoint, { observe: 'response' })
      .pipe(
        map(response => {
          return response.body;
        })
      );
  }

  /**
   * Function to add an artist to the api
   * @param _artist The artist to be added
   */
  ArtistAdd(_artist: Artist) {
    this.endPoint = this.baseUrl + this.artistRoute + 'ArtistAddItem';
    return this.httpClient.post<Artist>(this.endPoint, _artist, { observe: 'response' })
      .pipe(
        map(response => {
          if (response.status === 200) {
            return response.body;
          }
        })
      );
  }

  /**
   * Function to update an artist to the api
   * @param _artist The artist to be updated
   */
  ArtistUpdate(_artist: Artist) {
    this.endPoint = this.baseUrl + this.artistRoute + 'ArtistUpdateItem';
    return this.httpClient.put<Artist>(this.endPoint, _artist, { observe: 'response' })
      .pipe(
        map(response => {
          if (response.status === 200) {
            return response.body;
          }
        })
      );
  }

  /**
   * Function to delete an artist from the api
   * @param _artistId - The artistid to be deleted
   */
  ArtistDelete(_artistId: number) {
    this.endPoint = this.baseUrl + this.artistRoute + 'ArtistDeleteItem?Id=' + _artistId;
    return this.httpClient.delete<Artist>(this.endPoint, { observe: 'response' })
      .pipe(
        map(response => {
          if (response.status === 200) {
            return response.body;
          }
        })
      );
  }

  /**
   * Function to determine if we delete an artist from the api as it is not refrenced anymore
   * @param _artistId - The artistid to be deleted
   */
  ArtistCanDelete(_artistId: number) {
    this.endPoint = this.baseUrl + this.artistRoute + 'ArtistCanDeleteItem?Id=' + _artistId;
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
