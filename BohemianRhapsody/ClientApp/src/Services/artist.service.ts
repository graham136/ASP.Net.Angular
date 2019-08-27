//Angluar Imports
import { Injectable } from '@angular/core';
import { map, flatMap } from 'rxjs/operators';

// Services
import { ArtistHttpService } from './artisthttp.service';

// Models
import { Artist } from 'Models/Artist';


@Injectable()
export class ArtistService {

  public artists: Artist[];
  public currentArtist: Artist;
  public artistPictures: string[];

  constructor(public artistHttpService: ArtistHttpService) {
  }
  /**
     *  Function to retrieve the artist values from the artistttpservice and
     *  store them
     */
  GetAllArtists() {
    return this.artistHttpService.ArtistList()
      .pipe(
        map(artists => {
          if (artists) {
            this.artists = artists;
          }
          return artists;
        })
      );
  }

  /**
   *Function to retrive local album pictures.
   * */
  GetAllArtistPictures() {
    return this.artistHttpService.ArtistPictureList()
      .pipe(
        map(artistPictures => {
          if (artistPictures) {
            this.artistPictures = artistPictures;
          }
          return artistPictures;
        })
      );
  }

  // Function to add an artist value
  ArtistAddItem(_artist: Artist) {

    return this.artistHttpService.ArtistAdd(_artist)
      .pipe(
        map(response => {
          return response;
        })
      );
  }

  // Function to update an artist value
  ArtistUpdateItem(_artist: Artist) {

    return this.artistHttpService.ArtistUpdate(_artist)
      .pipe(
        map(response => {
          return response;
        })
      );
  }

  // Function to delete an artist item
  ArtistDeleteItem(_artistId: number) {

    return this.artistHttpService.ArtistDelete(_artistId)
      .pipe(
        map(response => {
          return response;
        })
      );
  }

  //Function to test if we can delete an item
  ArtistCanDeleteItem(_artistId: number) {
    return this.artistHttpService.ArtistCanDelete(_artistId)
      .pipe(
        map(response => {
          return response;
        })
      );
  }


}
