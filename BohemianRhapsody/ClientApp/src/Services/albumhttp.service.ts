//Angular imports
import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

// Models
import { Album } from 'Models/Album';

@Injectable()
export class AlbumHttpService {

  //Setup the api url to receive data from the node.js server

  private albumRoute: string = 'api/album/';
  private baseUrl: string;
  private endPoint: string;

  constructor(private httpClient: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  /**
   * Function to retrieve the album values from the api endpoints.
   * The function is used by albumservice to retrieve the album values and
   *  store them
   */
  AlbumList() {
    this.endPoint = this.baseUrl + this.albumRoute + 'AlbumGetAllItems';
    return this.httpClient.get<Album[]>(this.endPoint, { observe: 'response' })
      .pipe(
        map(response => {
          return response.body;
        })
      );
  }

  /**
   * Function to add an album to the api
   * @param _album The album to be added
   */
  AlbumAdd(_album: Album) {
    this.endPoint = this.baseUrl + this.albumRoute + 'AlbumAddItem';
    return this.httpClient.post<Album>(this.endPoint, _album, { observe: 'response' })
      .pipe(
        map(response => {
          if (response.status === 200) {
            return response.body;
          }
        })
      );
  }

  /**
   * Function to update an album to the api
   * @param _album The album to be updated
   */
  AlbumUpdate(_album: Album) {
    this.endPoint = this.baseUrl + this.albumRoute + 'AlbumUpdateItem';
    return this.httpClient.put<Album>(this.endPoint, _album, { observe: 'response' })
      .pipe(
        map(response => {
          if (response.status === 200) {
            return response.body;
          }
        })
      );
  }

  /**
   * Function to delete an album from the api
   * @param _albumId - The albumid to be deleted
   */
  AlbumDelete(_albumId: number) {
    this.endPoint = this.baseUrl + this.albumRoute + 'AlbumDeleteItem?Id=' + _albumId;
    return this.httpClient.delete<Album>(this.endPoint, { observe: 'response' })
      .pipe(
        map(response => {
          if (response.status === 200) {
            return response.body;
          }
        })
      );
  }

  /**
   * Function to determine if we delete an album from the api as it is not refrenced anymore
   * @param _albumId - The albumid to be deleted
   */
  AlbumCanDelete(_albumId: number) {
    this.endPoint = this.baseUrl + this.albumRoute + 'AlbumCanDeleteItem?Id=' + _albumId;
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
