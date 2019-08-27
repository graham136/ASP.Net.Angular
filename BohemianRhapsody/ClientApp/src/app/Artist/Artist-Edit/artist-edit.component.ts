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
  public selectedArtist: string;
  public artistPictures: string[];

  myForm = new FormGroup({});

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string,
    public artistService: ArtistService,
    public router: Router,
    public formBuilder: FormBuilder) {

    this.artist = artistService.currentArtist;
    this.selectedArtist = this.artist.artistUrl;

    artistService.GetAllArtistPictures().subscribe(
      (result: string[]) => {
        this.artistPictures = result;
      });

    this.myForm = formBuilder.group({
      'artistName': [this.artist.artistName, [Validators.required]],
      'artistPicture': [this.artist.artistUrl,[Validators.required]]
    });
  }

  // On url change
  onUrlChange() {
    this.selectedArtist = this.myForm.controls.artistPicture.value;
  }

  // Function to route back to artist without save edited artist
  onBackClick() {
    this.router.navigateByUrl('/artist-list');
  }

  // Function to save edited artist and route back to artists
  onSaveClick() {

    this.tempArtist = this.myForm.controls.artistName.value;
    this.artist.artistName = this.tempArtist;
    this.artist.artistUrl = this.myForm.controls.artistPicture.value;
    
    this.artistService.ArtistUpdateItem(this.artist).subscribe(
      (result: Artist) => {
        this.artist = result;
        this.router.navigateByUrl('/artist-list');
      });
    
  }
}

