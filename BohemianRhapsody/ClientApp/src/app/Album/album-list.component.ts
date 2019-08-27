import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

// Model Imports
import { Album } from 'Models/Album';

// Serivce Imports
import { AlbumService } from 'Services/album.service';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html'
})
export class AlbumListComponent {
  public albums: Album[];
  myForm = new FormGroup({});
  public searchString: string;

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string,
    public albumService: AlbumService,
    public router: Router,
    public formBuilder: FormBuilder) {

    /*
     *Standard Api Call abstracted to service layer Album Service which calls Album Http Service which does the call.
     * 
    http.get<Album[]>(baseUrl + 'api/album/albumGetAll').subscribe(result => {
      this.albums = result;
      console.log(this.albums);
    }, error => console.error(error));
    */
        
    this.albumService.GetAllAlbums().subscribe(
      (result: Album[]) => {
        this.albums = result;
      });

    this.myForm = formBuilder.group({
      'albumName': ['', [Validators.required]],

    });
  }

  // Function to route to view album detail page
  onViewClick(index :number) {
    this.albumService.currentAlbum = this.albums[index];
    this.router.navigateByUrl('/album-view');
  }

  // Function to route to edit album detail page
  onEditClick(index: number) {
    this.albumService.currentAlbum = this.albums[index];
    this.router.navigateByUrl('/album-edit');
  }

  // Function to route to delete album detail page
  onDeleteClick(index: number) {
    this.albumService.currentAlbum = this.albums[index]
    this.router.navigateByUrl('/album-delete');
  }

  // Function to route to add album detail page
  onAddClick() {
    this.router.navigateByUrl('/album-add');
  }

  // Function to search for a album
  onSearchClick() {
    this.searchString = this.myForm.controls.albumName.value;
    this.searchString = this.searchString.toLowerCase();
    this.albumService.GetAllAlbums().subscribe(
      (result: Album[]) => {
        this.albums = result;
        this.albums.forEach((item) => {
          if (!item.albumName.toLowerCase().startsWith(this.searchString)) {
            this.albums = this.albums.filter(album => item.albumId != album.albumId);
          }
        });
      });
  }

  // Function to refresh a search
  onRefreshClick() {
    this.albumService.GetAllAlbums().subscribe(
      (result: Album[]) => {
        this.albums = result;
      });
  }
   
}

