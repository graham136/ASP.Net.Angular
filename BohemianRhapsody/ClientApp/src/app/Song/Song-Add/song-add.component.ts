import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

// Model Imports
import { Song } from 'Models/Song';
import { Artist } from 'Models/Artist'
import { Album } from 'Models/Album'
import { Genre } from 'Models/Genre'

// Serivce Imports
import { SongService } from 'Services/song.service';
import { ArtistService } from '../../../Services/artist.service';
import { GenreService } from 'Services/genre.service';
import { AlbumService } from 'Services/album.service';

@Component({
  selector: 'app-song-add',
  templateUrl: './song-add.component.html'
})
export class SongAddComponent {
  public songs: Song[];
  public artists: Artist[];
  public genres: Genre[];
  public albums: Album[];
  public song: Song;
  public tempSong: string;
  public tempArtist: Artist;
  public tempGenre: Genre;
  public tempAlbum: Album;

  myForm = new FormGroup({});

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string,
    public songService: SongService,
    public artistService: ArtistService,
    public albumService: AlbumService,
    public genreService: GenreService,
    public router: Router,
    public formBuilder: FormBuilder) {
        
    this.song = new Song();

    artistService.GetAllArtists().subscribe(
      (result: Artist[]) => {
        this.artists = result;
        albumService.GetAllAlbums().subscribe(
          (result: Album[]) => {
            this.albums = result;
            genreService.GetAllGenres().subscribe(
              (result: Genre[]) => {
                this.genres = result;
              });
          });
      });

    this.tempArtist = new Artist();
    
    this.tempGenre = new Genre();
    
    this.tempAlbum = new Album();
    

    this.myForm = formBuilder.group({
      'songName': ['', [Validators.required]],
      'artistName': ['', [Validators.required]],
      'albumName': ['', [Validators.required]],
      'genreName': ['', [Validators.required]]
    });
  }

  // Function to route back to song list
  onBackClick() {
    this.router.navigateByUrl('/song-list');
  }

  // Function to save current added song
  onSaveClick() {

    this.tempSong = this.myForm.controls.songName.value;
    this.tempArtist.artistName = this.myForm.controls.artistName.value;
    this.tempArtist.artistId = this.artists.find(artist => artist.artistName == this.tempArtist.artistName).artistId;
    this.tempAlbum.albumName = this.myForm.controls.albumName.value;
    this.tempAlbum.albumId = this.albums.find(album => album.albumName == this.tempAlbum.albumName).albumId;
    this.tempGenre.genreName = this.myForm.controls.genreName.value;
    this.tempGenre.genreId = this.genres.find(genre => genre.genreName == this.tempGenre.genreName).genreId;

    this.song.songName = this.tempSong;
    this.song.artistName = this.tempArtist.artistName;
    this.song.artistId = this.tempArtist.artistId;
    this.song.albumId = this.tempAlbum.albumId;
    this.song.albumName = this.tempAlbum.albumName;
    this.song.genreId = this.tempGenre.genreId;
    this.song.genreName = this.tempGenre.genreName;
    
    this.songService.SongAddItem(this.song).subscribe(
      (result: Song) => {
        this.song = result;
        this.router.navigateByUrl('/song-list');
      });
    
  }
}

