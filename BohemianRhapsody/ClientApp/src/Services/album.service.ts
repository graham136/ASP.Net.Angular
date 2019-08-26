//Angluar Imports
import { Injectable } from '@angular/core';
import { map, flatMap } from 'rxjs/operators';

// Services
import { AlbumHttpService } from './albumhttp.service';

// Models
import { Album } from 'Models/Album';


@Injectable()
export class AlbumService {

  public albums: Album[];
  public currentAlbum: Album;

  constructor(public albumHttpService: AlbumHttpService) {
  }
  /**
     *  Function to retrieve the album values from the albumttpservice and
     *  store them
     */
  GetAllAlbums() {
    return this.albumHttpService.AlbumList()
      .pipe(
        map(albums => {
          if (albums) {
            this.albums = albums;
          }
          return albums;
        })
      );
  }

  // Function to add an album value
  AlbumAddItem(_album: Album) {

    return this.albumHttpService.AlbumAdd(_album)
      .pipe(
        map(response => {
          return response;
        })
      );
  }

  // Function to update an album value
  AlbumUpdateItem(_album: Album) {

    return this.albumHttpService.AlbumUpdate(_album)
      .pipe(
        map(response => {
          return response;
        })
      );
  }

  // Function to delete an album item
  AlbumDeleteItem(_albumId: number) {

    return this.albumHttpService.AlbumDelete(_albumId)
      .pipe(
        map(response => {
          return response;
        })
      );
  }

  //Function to test if we can delete an item
  AlbumCanDeleteItem(_albumId: number) {
    return this.albumHttpService.AlbumCanDelete(_albumId)
      .pipe(
        map(response => {
          return response;
        })
      );
  }


}
