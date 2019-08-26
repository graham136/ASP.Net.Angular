import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

// Model Imports
import { Artist } from 'Models/Artist';

// Serivce Imports
import { ArtistService } from 'Services/artist.service';

@Component({
  selector: 'app-artist-edit',
  templateUrl: './artist-edit.component.html'
})
export class ArtistEditComponent {
  public artists: Artist[];
  public artist: Artist;
  public tempArtist: string;

  myForm = new FormGroup({});

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string,
    public artistService: ArtistService,
    public router: Router,
    public formBuilder: FormBuilder) {

    this.artist = artistService.currentArtist;

    this.myForm = formBuilder.group({
      'artistName': [this.artist.artistName, [Validators.required]]
    });
  }

  // Function to route back to artist without save edited artist
  onBackClick() {
    this.router.navigateByUrl('/artist-list');
  }

  // Function to save edited artist and route back to artists
  onSaveClick() {

    this.tempArtist = this.myForm.controls.artistName.value;
    this.artist.artistName = this.tempArtist;
    
    this.artistService.ArtistUpdateItem(this.artist).subscribe(
      (result: Artist) => {
        this.artist = result;
        this.router.navigateByUrl('/artist-list');
      });
    
  }
}

