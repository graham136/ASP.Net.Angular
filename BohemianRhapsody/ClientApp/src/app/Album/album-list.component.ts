import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

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

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string,
    public albumService: AlbumService,
    public router: Router) {

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
   
}

