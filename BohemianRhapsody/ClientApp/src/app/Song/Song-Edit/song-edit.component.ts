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
  selector: 'app-song-edit',
  templateUrl: './song-edit.component.html'
})
export class SongEditComponent {
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

    this.song = songService.currentSong;

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
    this.tempArtist.artistId = this.song.artistId;
    this.tempArtist.artistName = this.song.artistName;

    this.tempGenre = new Genre();
    this.tempGenre.genreId = this.song.genreId;
    this.tempGenre.genreName = this.song.genreName;

    this.tempAlbum = new Album();
    this.tempAlbum.albumId = this.song.albumId;
    this.tempAlbum.albumName = this.song.albumName;


    
    this.myForm = formBuilder.group({
      'songName': [this.song.songName, [Validators.required]],
      'artistName': [this.tempArtist.artistName, [Validators.required]],
      'albumName': [this.tempAlbum.albumName, [Validators.required]],
      'genreName': [this.tempGenre.genreName, [Validators.required]]
    });

  }

  // Function to route back to song without save edited song
  onBackClick() {
    this.router.navigateByUrl('/song-list');
  }

  // Function to save edited song and route back to songs
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
    
    this.songService.SongUpdateItem(this.song).subscribe(
      (result: Song) => {
        this.song = result;
        this.router.navigateByUrl('/song-list');
      });
    
  }
}

