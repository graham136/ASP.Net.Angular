import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


// Model Imports
import { Song } from 'Models/Song';

// Serivce Imports
import { SongService } from 'Services/song.service';

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html'
})
export class SongListComponent {
  public songs: Song[];
  myForm = new FormGroup({});
  public searchString: string;

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string,
    public songService: SongService,
    public router: Router,
    public formBuilder: FormBuilder) {

    /*
     *Standard Api Call abstracted to service layer Song Service which calls Song Http Service which does the call.
     * 
    http.get<Song[]>(baseUrl + 'api/song/songGetAll').subscribe(result => {
      this.songs = result;
      console.log(this.songs);
    }, error => console.error(error));
    */
        
    this.songService.GetAllSongs().subscribe(
      (result: Song[]) => {
        this.songs = result;
      });

    this.myForm = formBuilder.group({
      'songName': ['', [Validators.required]],
      
    });
  }

  // Function to route to view song detail page
  onViewClick(index :number) {
    this.songService.currentSong = this.songs[index];
    this.router.navigateByUrl('/song-view');
  }

  // Function to route to edit song detail page
  onEditClick(index: number) {
    this.songService.currentSong = this.songs[index];
    this.router.navigateByUrl('/song-edit');
  }

  // Function to route to delete song detail page
  onDeleteClick(index: number) {
    this.songService.currentSong = this.songs[index]
    this.router.navigateByUrl('/song-delete');
  }

  // Function to route to add song detail page
  onAddClick() {
    this.router.navigateByUrl('/song-add');
  }

  // Function to search for a song
  onSearchClick() {
    this.searchString = this.myForm.controls.songName.value;
    this.searchString = this.searchString.toLowerCase();
    this.songService.GetAllSongs().subscribe(
      (result: Song[]) => {
        this.songs = result;        
        this.songs.forEach((item) => {          
          if (!item.songName.toLowerCase().startsWith(this.searchString)) {
            this.songs = this.songs.filter(song => item.songId != song.songId);           
          }
        });        
      });
  }

  // Function to refresh a search
  onRefreshClick() {
    this.songService.GetAllSongs().subscribe(
      (result: Song[]) => {
        this.songs = result;        
      });
  }
   
}

