import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

// Model Imports
import { Album } from 'Models/Album';
import { Artist } from 'Models/Artist';

// Serivce Imports
import { AlbumService } from 'Services/album.service';
import { ArtistService } from 'Services/artist.service';

@Component({
  selector: 'app-album-add',
  templateUrl: './album-add.component.html'
})
export class AlbumAddComponent {
  public albums: Album[];
  public artists: Artist[];
  public albumPictures: string[];
  public album: Album;
  public tempAlbum: string;
  public tempArtist: Artist;
  public selectedAlbum: string;

  myForm = new FormGroup({});

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string,
    public albumService: AlbumService,
    public artistService: ArtistService,   
    public router: Router,
    public formBuilder: FormBuilder) {

    this.album = new Album();

    artistService.GetAllArtists().subscribe(
      (result: Artist[]) => {
        this.artists = result;
        albumService.GetAllAlbumPictures().subscribe(
          (result: string[]) => {
            this.albumPictures = result;            
          });
      });    

    this.tempArtist = new Artist();
    
    this.myForm = formBuilder.group({
      'albumName': ['', [Validators.required]],
      'artistName': ['', [Validators.required]],
      'albumPicture': ['', [Validators.required]]
    });
  }

  // Function to route back to album list
  onBackClick() {
    this.router.navigateByUrl('/album-list');
  }

  // Function to save current added album
  onSaveClick() {

    this.tempAlbum = this.myForm.controls.albumName.value;
    this.tempArtist.artistName = this.myForm.controls.artistName.value;
    this.tempArtist.artistId = this.artists.find(artist => artist.artistName == this.tempArtist.artistName).artistId;
    this.album.albumName = this.tempAlbum;
    this.album.artistName = this.tempArtist.artistName;
    this.album.artistId = this.tempArtist.artistId;
    this.album.albumUrl = this.myForm.controls.albumPicture.value;
    
    this.albumService.AlbumAddItem(this.album).subscribe(
      (result: Album) => {
        this.album = result;
        this.router.navigateByUrl('/album-list');
      });
    
  }
}

