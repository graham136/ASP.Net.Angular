import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

// Model Imports
import { Album } from 'Models/Album';
import { Artist } from 'Models/Artist'

// Serivce Imports
import { AlbumService } from 'Services/album.service';
import { ArtistService } from '../../../Services/artist.service';

@Component({
  selector: 'app-album-edit',
  templateUrl: './album-edit.component.html'
})
export class AlbumEditComponent {
  public albums: Album[];
  public artists: Artist[];
  public album: Album;
  public albumPictures: string[];
  public tempUrl: string;
  public tempAlbum: string;
  public tempArtist: Artist;
  public selectedAlbum: string;

  myForm = new FormGroup({});

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string,
    public albumService: AlbumService,
    public artistService: ArtistService,
    public router: Router,
    public formBuilder: FormBuilder) {

    this.album = albumService.currentAlbum;

    artistService.GetAllArtists().subscribe(
      (result: Artist[]) => {
        this.artists = result;
        albumService.GetAllAlbumPictures().subscribe(
          (result: string[]) => {
            this.albumPictures = result;
          });
      });

    this.tempArtist = new Artist();
    this.tempArtist.artistId = this.album.artistId;
    this.tempArtist.artistName = this.album.artistName;
    this.tempUrl = this.album.albumUrl;
    this.selectedAlbum = this.tempUrl;
    
    this.myForm = formBuilder.group({
      'albumName': [this.album.albumName, [Validators.required]],
      'artistName': [this.album.artistName, [Validators.required]],
      'albumPicture': [this.tempUrl, [Validators.required]]
    });

  }

  // On url change
  onUrlChange() {
    this.selectedAlbum = this.myForm.controls.albumPicture.value;
  }
  // Function to route back to album without save edited album
  onBackClick() {
    this.router.navigateByUrl('/album-list');
  }

  // Function to save edited album and route back to albums
  onSaveClick() {

    this.tempAlbum = this.myForm.controls.albumName.value;
    this.tempArtist.artistName = this.myForm.controls.artistName.value;
    this.tempArtist.artistId = this.artists.find(artist => artist.artistName == this.tempArtist.artistName).artistId;
    this.album.albumName = this.tempAlbum;
    this.album.artistName = this.tempArtist.artistName;
    this.album.artistId = this.tempArtist.artistId;
    this.album.albumUrl = this.myForm.controls.albumPicture.value;
    
    this.albumService.AlbumUpdateItem(this.album).subscribe(
      (result: Album) => {
        this.album = result;
        this.router.navigateByUrl('/album-list');
      });
    
  }
}

