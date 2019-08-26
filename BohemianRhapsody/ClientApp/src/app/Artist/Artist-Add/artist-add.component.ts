import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

// Model Imports
import { Artist } from 'Models/Artist';

// Serivce Imports
import { ArtistService } from 'Services/artist.service';

@Component({
  selector: 'app-artist-add',
  templateUrl: './artist-add.component.html'
})
export class ArtistAddComponent {
  public artists: Artist[];
  public artist: Artist;
  public tempArtist: string;

  myForm = new FormGroup({});

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string,
    public artistService: ArtistService,
    public router: Router,
    public formBuilder: FormBuilder) {

    this.artist = new Artist();

    this.myForm = formBuilder.group({
      'artistName': ['', [Validators.required]]
    });
  }

  // Function to route back to artist list
  onBackClick() {
    this.router.navigateByUrl('/artist-list');
  }

  // Function to save current added artist
  onSaveClick() {

    this.tempArtist = this.myForm.controls.artistName.value;
    
    this.artist.artistName = this.tempArtist;
    
    this.artistService.ArtistAddItem(this.artist).subscribe(
      (result: Artist) => {
        this.artist = result;
        this.router.navigateByUrl('/artist-list');
      });
    
  }
}

