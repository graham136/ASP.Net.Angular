import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

// Model Imports
import { Album } from 'Models/Album';

// Serivce Imports
import { AlbumService } from 'Services/album.service';

@Component({
  selector: 'app-album-add',
  templateUrl: './album-add.component.html'
})
export class AlbumAddComponent {
  public albums: Album[];
  public album: Album;
  public tempAlbum: string;
  public tempArtist: string;

  myForm = new FormGroup({});

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string,
    public albumService: AlbumService,
    public router: Router,
    public formBuilder: FormBuilder) {

    this.album = new Album();

    this.myForm = formBuilder.group({
      'albumName': ['', [Validators.required]],
      'artistName': ['', [Validators.required]]
    });
  }

  // Function to route back to album list
  onBackClick() {
    this.router.navigateByUrl('/album-list');
  }

  // Function to save current added album
  onSaveClick() {

    this.tempAlbum = this.myForm.controls.albumName.value;
    this.tempArtist = this.myForm.controls.artistName.value;
    
    this.album.albumName = this.tempAlbum;
    this.album.artistName = this.tempArtist;
    
    this.albumService.AlbumAddItem(this.album).subscribe(
      (result: Album) => {
        this.album = result;
        this.router.navigateByUrl('/album-list');
      });
    
  }
}

