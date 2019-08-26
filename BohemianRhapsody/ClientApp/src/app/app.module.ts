import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';


// Custom Page Imports
import { GenreListComponent } from './Genre/genre-list.component';
import { GenreViewComponent } from './Genre/Genre-View/genre-view.component';
import { GenreEditComponent } from './Genre/Genre-Edit/genre-edit.component';
import { GenreAddComponent } from './Genre/Genre-Add/genre-add.component';
import { GenreDeleteComponent } from './Genre/Genre-Delete/genre-delete.component';

//Service Imports
import { GenreService } from 'Services/genre.service';
import { GenreHttpService } from '../Services/genrehttp.service';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    GenreListComponent,
    GenreViewComponent,
    GenreEditComponent,
    GenreAddComponent,
    GenreDeleteComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'genre-list', component: GenreListComponent },
      { path: 'genre-view', component: GenreViewComponent },
      { path: 'genre-edit', component: GenreEditComponent },
      { path: 'genre-add', component: GenreAddComponent },
      { path: 'genre-delete', component: GenreDeleteComponent },
    ])
  ],
  providers: [GenreService,GenreHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
