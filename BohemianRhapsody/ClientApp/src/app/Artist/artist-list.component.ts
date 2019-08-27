import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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
  myForm = new FormGroup({});
  public searchString: string;

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string,
    public artistService: ArtistService,
    public router: Router,
    public formBuilder: FormBuilder) {

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

    this.myForm = formBuilder.group({
      'artistName': ['', [Validators.required]],

    });
  }

  // Function to route to view artist detail page
  onViewClick(index: number) {
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

  // Function to search for a artist
  onSearchClick() {
    this.searchString = this.myForm.controls.artistName.value;
    this.searchString = this.searchString.toLowerCase();
    this.artistService.GetAllArtists().subscribe(
      (result: Artist[]) => {
        this.artists = result;
        this.artists.forEach((item) => {
          if (!item.artistName.toLowerCase().startsWith(this.searchString)) {
            this.artists = this.artists.filter(artist => item.artistId != artist.artistId);
          }
        });
      });
  }

  // Function to refresh a search
  onRefreshClick() {
    this.artistService.GetAllArtists().subscribe(
      (result: Artist[]) => {
        this.artists = result;
      });
  }

}

