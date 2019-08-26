import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

// Model Imports
import { Artist } from 'Models/Artist';

// Serivce Imports
import { ArtistService } from 'Services/artist.service';

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html'
})
export class ArtistListComponent {
  public artists: Artist[];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string,
    public artistService: ArtistService,
    public router: Router) {

    /*
     *Standard Api Call abstracted to service layer Artist Service which calls Artist Http Service which does the call.
     * 
    http.get<Artist[]>(baseUrl + 'api/artist/artistGetAll').subscribe(result => {
      this.artists = result;
      console.log(this.artists);
    }, error => console.error(error));
    */
        
    this.artistService.GetAllArtists().subscribe(
      (result: Artist[]) => {
        this.artists = result;
      });
  }

  // Function to route to view artist detail page
  onViewClick(index :number) {
    this.artistService.currentArtist = this.artists[index];
    this.router.navigateByUrl('/artist-view');
  }

  // Function to route to edit artist detail page
  onEditClick(index: number) {
    this.artistService.currentArtist = this.artists[index];
    this.router.navigateByUrl('/artist-edit');
  }

  // Function to route to delete artist detail page
  onDeleteClick(index: number) {
    this.artistService.currentArtist = this.artists[index]
    this.router.navigateByUrl('/artist-delete');
  }

  // Function to route to add artist detail page
  onAddClick() {
    this.router.navigateByUrl('/artist-add');
  }
   
}

