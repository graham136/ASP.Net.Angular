import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';


// Custom Page Imports
import { GenreListComponent } from './Genre/genre-list.component';
import { GenreViewComponent } from './Genre/Genre-View/genre-view.component';
import { GenreEditComponent } from './Genre/Genre-Edit/genre-edit.component';
import { GenreAddComponent } from './Genre/Genre-Add/genre-add.component';
import { GenreDeleteComponent } from './Genre/Genre-Delete/genre-delete.component';

import { ArtistListComponent } from './Artist/artist-list.component';
import { ArtistViewComponent } from './Artist/Artist-View/artist-view.component';
import { ArtistEditComponent } from './Artist/Artist-Edit/artist-edit.component';
import { ArtistAddComponent } from './Artist/Artist-Add/artist-add.component';
import { ArtistDeleteComponent } from './Artist/Artist-Delete/artist-delete.component';

import { AlbumListComponent } from './Album/album-list.component';
import { AlbumViewComponent } from './Album/Album-View/album-view.component';
import { AlbumEditComponent } from './Album/Album-Edit/album-edit.component';
import { AlbumAddComponent } from './Album/Album-Add/album-add.component';
import { AlbumDeleteComponent } from './Album/Album-Delete/album-delete.component';

import { SongListComponent } from './Song/song-list.component';
import { SongViewComponent } from './Song/Song-View/song-view.component';
import { SongEditComponent } from './Song/Song-Edit/song-edit.component';
import { SongAddComponent } from './Song/Song-Add/song-add.component';
import { SongDeleteComponent } from './Song/Song-Delete/song-delete.component';

//Service Imports
import { GenreService } from 'Services/genre.service';
import { GenreHttpService } from '../Services/genrehttp.service';
import { ArtistService } from 'Services/artist.service';
import { ArtistHttpService } from '../Services/artisthttp.service';
import { AlbumService } from 'Services/album.service';
import { AlbumHttpService } from '../Services/albumhttp.service';
import { SongService } from 'Services/song.service';
import { SongHttpService } from '../Services/songhttp.service';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,   
    GenreListComponent,
    GenreViewComponent,
    GenreEditComponent,
    GenreAddComponent,
    GenreDeleteComponent,
    ArtistListComponent,
    ArtistViewComponent,
    ArtistEditComponent,
    ArtistAddComponent,
    ArtistDeleteComponent,
    AlbumListComponent,
    AlbumViewComponent,
    AlbumEditComponent,
    AlbumAddComponent,
    AlbumDeleteComponent,
    SongListComponent,
    SongViewComponent,
    SongEditComponent,
    SongAddComponent,
    SongDeleteComponent,

  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },     
      { path: 'genre-list', component: GenreListComponent },
      { path: 'genre-view', component: GenreViewComponent },
      { path: 'genre-edit', component: GenreEditComponent },
      { path: 'genre-add', component: GenreAddComponent },
      { path: 'genre-delete', component: GenreDeleteComponent },
      { path: 'artist-list', component: ArtistListComponent },
      { path: 'artist-view', component: ArtistViewComponent },
      { path: 'artist-edit', component: ArtistEditComponent },
      { path: 'artist-add', component: ArtistAddComponent },
      { path: 'artist-delete', component: ArtistDeleteComponent },
      { path: 'album-list', component: AlbumListComponent },
      { path: 'album-view', component: AlbumViewComponent },
      { path: 'album-edit', component: AlbumEditComponent },
      { path: 'album-add', component: AlbumAddComponent },
      { path: 'album-delete', component: AlbumDeleteComponent },
      { path: 'song-list', component: SongListComponent },
      { path: 'song-view', component: SongViewComponent },
      { path: 'song-edit', component: SongEditComponent },
      { path: 'song-add', component: SongAddComponent },
      { path: 'song-delete', component: SongDeleteComponent },
    ])
  ],
  providers: [GenreService, GenreHttpService, ArtistService, ArtistHttpService, AlbumService, AlbumHttpService, , SongService, SongHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
