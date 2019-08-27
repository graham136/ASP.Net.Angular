using BohemianRhapsody.Api.Interfaces;
using BohemianRhapsody.Api.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Results;

namespace BohemianRhapsody.Api.Data
{
    public class SqlLiteData : IMusicData

    {
        public IEnumerable<Genre> Genres;
        public IEnumerable<Artist> Artists;
        public IEnumerable<Album> Albums;
        public IEnumerable<Song> Songs;

        private SqlLiteDbContext _sqlLiteDbContext;

        /// <summary>
        /// Constructor
        /// </summary>
        public SqlLiteData()
        {
            _sqlLiteDbContext = new SqlLiteDbContext();
            Genres = _sqlLiteDbContext.Genres;
            Artists = _sqlLiteDbContext.Artists;
            Albums = _sqlLiteDbContext.Albums;
            Songs = _sqlLiteDbContext.Songs;

            if (!Genres.Any())
            {
                GenreAddItem(new Genre { GenreName = "Rock", GenreId=1 });
            }

            if (!Artists.Any())
            {
                ArtistAddItem(new Artist { ArtistName = "Bon Jovi", ArtistId=1, ArtistUrl= "assets/Artist1.jpg" });
            }

            if (!Albums.Any())
            {
                AlbumAddItem(new Album { AlbumName = "Its my life", ArtistName="Bon Jovi", AlbumUrl="assets/Album1.jpg",AlbumId=1, ArtistId=1 });
            }

            if (!Songs.Any())
            {
                SongAddItem(new Song { AlbumName = "Its my life", ArtistName = "Bon Jovi", GenreName="Rock", SongName="Living on a prayer",GenreId=1, SongId=1, AlbumId = 1, ArtistId = 1 });
            }

        }

        #region Genres

        //***************************************************************************************Genres *****************************************************************

        /// <summary>
        /// Get all the genres in the database
        /// </summary>
        /// <returns></returns>
        public IEnumerable<Genre> GenreGetAllItems()
        {
            return _sqlLiteDbContext.Genres;
        }

        /// <summary>
        /// Get a genre by id
        /// </summary>
        /// <param name="Id"> id of genre to be found</param>
        /// <returns></returns>
        public Genre GenreGetById(int Id)
        {
            var result = _sqlLiteDbContext.Genres.First(genre => genre.GenreId == Id);
            return result;
        }

        /// <summary>
        /// To add a genre
        /// </summary>
        /// <param name="addedGenre"> genre to add </param>
        /// <returns></returns>
        public Genre GenreAddItem(Genre addedGenre)
        {
            var result = _sqlLiteDbContext.Genres.FirstOrDefault(genre => genre.GenreName == addedGenre.GenreName);
            if (result == null)
            {
                _sqlLiteDbContext.Genres.Add(addedGenre);
                _sqlLiteDbContext.SaveChanges();
                var tempGenre = _sqlLiteDbContext.Genres.First(genre => genre.GenreName == addedGenre.GenreName);
                return tempGenre;
            }
            else
            {
                return null;
            }

        }

        /// <summary>
        /// To delete a genre
        /// </summary>
        /// <param name="Id"> id of genre to delete </param>
        /// <returns></returns>
        public Genre GenreDeleteItem(int Id)
        {
            var tempGenre = _sqlLiteDbContext.Genres.First(genre => genre.GenreId == Id);
            if (tempGenre != null)
            {
                _sqlLiteDbContext.Genres.Remove(tempGenre);
                _sqlLiteDbContext.SaveChanges();
                return tempGenre;
            }
            else
            {
                return null;
            }
        }
        
        /// <summary>
        /// Update a genre 
        /// </summary>
        /// <param name="updatedGenre"> genre to be updated to </param>
        /// <returns></returns>
        public Genre GenreUpdateItem(Genre updatedGenre)
        {
            var result = _sqlLiteDbContext.Genres.First(genre => genre.GenreId == updatedGenre.GenreId);
            if (result != null)
            {

                result.GenreName = updatedGenre.GenreName;
                _sqlLiteDbContext.Genres.Update(result);
                _sqlLiteDbContext.SaveChanges();
                var tempGenre = _sqlLiteDbContext.Genres.First(genre => genre.GenreId == updatedGenre.GenreId);
                return tempGenre;
            }
            else
            {
                return null;
            }
        }

        /// <summary>
        /// Tests if the genre can be deleted
        /// </summary>
        /// <param name="Id"> id of genre deleted </param>
        /// <returns></returns>
        public bool GenreCanDeleteItem(int Id)
        {
            var result = _sqlLiteDbContext.Songs.FirstOrDefault(song => song.GenreId == Id);
            if(result==null)
            {
                return true;
            }
            else
            {
                return false;
            }
        }

        #endregion

        #region Artists

        //***************************************************************************************Artists *****************************************************************

        /// <summary>
        /// Get all the albums in the database
        /// </summary>
        /// <returns></returns>
        public IEnumerable<Artist> ArtistGetAllItems()
        {
            return _sqlLiteDbContext.Artists;
        }

        /// <summary>
        /// Get a artist by id
        /// </summary>
        /// <param name="Id"> id of artist to be found</param>
        /// <returns></returns>
        public Artist ArtistGetById(int Id)
        {
            var result = _sqlLiteDbContext.Artists.First(artist => artist.ArtistId == Id);
            return result;
        }

        /// <summary>
        /// To add a artist
        /// </summary>
        /// <param name="addedArtist"> artist to add </param>
        /// <returns></returns>
        public Artist ArtistAddItem(Artist addedArtist)
        {
            var result = _sqlLiteDbContext.Artists.FirstOrDefault(artist => artist.ArtistName == addedArtist.ArtistName);
            if (result == null)
            {
                _sqlLiteDbContext.Artists.Add(addedArtist);
                _sqlLiteDbContext.SaveChanges();
                var tempArtist = _sqlLiteDbContext.Artists.First(artist => artist.ArtistName == addedArtist.ArtistName);
                return tempArtist;
            }
            else
            {
                return null;
            }

        }

        /// <summary>
        /// To delete a artist
        /// </summary>
        /// <param name="Id"> id of artist to delete </param>
        /// <returns></returns>
        public Artist ArtistDeleteItem(int Id)
        {
            var tempArtist = _sqlLiteDbContext.Artists.First(artist => artist.ArtistId == Id);
            if (tempArtist != null)
            {
                _sqlLiteDbContext.Artists.Remove(tempArtist);
                _sqlLiteDbContext.SaveChanges();
                return tempArtist;
            }
            else
            {
                return null;
            }
        }

        /// <summary>
        /// Update a artist 
        /// </summary>
        /// <param name="updatedArtist"> artist to be updated to </param>
        /// <returns></returns>
        public Artist ArtistUpdateItem(Artist updatedArtist)
        {
            var result = _sqlLiteDbContext.Artists.First(artist => artist.ArtistId == updatedArtist.ArtistId);
            if (result != null)
            {

                result.ArtistName = updatedArtist.ArtistName;
                result.ArtistUrl = updatedArtist.ArtistUrl;
                _sqlLiteDbContext.Artists.Update(result);
                _sqlLiteDbContext.SaveChanges();
                var tempArtist = _sqlLiteDbContext.Artists.First(artist => artist.ArtistId == updatedArtist.ArtistId);
                return tempArtist;
            }
            else
            {
                return null;
            }
        }

        /// <summary>
        /// Tests if the artist can be deleted
        /// </summary>
        /// <param name="Id"> id of genre deleted </param>
        /// <returns></returns>
        public bool ArtistCanDeleteItem(int Id)
        {
            var result = _sqlLiteDbContext.Songs.FirstOrDefault(song => song.ArtistId == Id);
            if (result == null)
            {
                return true;
            }
            else
            {
                return false;
            }
        }

        #endregion

        #region Album

        //***************************************************************************************Album *****************************************************************

        /// <summary>
        /// Get all the album in the database
        /// </summary>
        /// <returns></returns>
        public IEnumerable<Album> AlbumGetAllItems()
        {
            return _sqlLiteDbContext.Albums;
        }

        /// <summary>
        /// Get a album by id
        /// </summary>
        /// <param name="Id"> id of album to be found</param>
        /// <returns></returns>
        public Album AlbumGetById(int Id)
        {
            var result = _sqlLiteDbContext.Albums.First(album => album.AlbumId == Id);
            return result;
        }

        /// <summary>
        /// To add a album
        /// </summary>
        /// <param name="addedAlbum"> album to add </param>
        /// <returns></returns>
        public Album AlbumAddItem(Album addedAlbum)
        {
            var result = _sqlLiteDbContext.Albums.FirstOrDefault(album => album.AlbumName == addedAlbum.AlbumName);
            if (result == null)
            {
                _sqlLiteDbContext.Albums.Add(addedAlbum);
                _sqlLiteDbContext.SaveChanges();
                var tempAlbum = _sqlLiteDbContext.Albums.First(album => album.AlbumName == addedAlbum.AlbumName);
                return tempAlbum;
            }
            else
            {
                return null;
            }

        }

        /// <summary>
        /// To delete a album
        /// </summary>
        /// <param name="Id"> id of album to delete </param>
        /// <returns></returns>
        public Album AlbumDeleteItem(int Id)
        {
            var tempAlbum = _sqlLiteDbContext.Albums.First(album => album.AlbumId == Id);
            if (tempAlbum != null)
            {
                _sqlLiteDbContext.Albums.Remove(tempAlbum);
                _sqlLiteDbContext.SaveChanges();
                return tempAlbum;
            }
            else
            {
                return null;
            }
        }

        /// <summary>
        /// Update a album 
        /// </summary>
        /// <param name="updatedAlbum"> album to be updated to </param>
        /// <returns></returns>
        public Album AlbumUpdateItem(Album updatedAlbum)
        {
            var result = _sqlLiteDbContext.Albums.First(album => album.AlbumId == updatedAlbum.AlbumId);
            if (result != null)
            {

                result.AlbumName = updatedAlbum.AlbumName;
                result.ArtistName = updatedAlbum.ArtistName;
                result.ArtistId = updatedAlbum.ArtistId;
                result.AlbumUrl = updatedAlbum.AlbumUrl;
                _sqlLiteDbContext.Albums.Update(result);
                _sqlLiteDbContext.SaveChanges();
                var tempAlbum = _sqlLiteDbContext.Albums.First(album => album.AlbumId == updatedAlbum.AlbumId);
                return tempAlbum;
            }
            else
            {
                return null;
            }
        }

        /// <summary>
        /// Tests if the album can be deleted
        /// </summary>
        /// <param name="Id"> id of genre deleted </param>
        /// <returns></returns>
        public bool AlbumCanDeleteItem(int Id)
        {
            var result = _sqlLiteDbContext.Songs.FirstOrDefault(song => song.AlbumId == Id);
            if (result == null)
            {
                return true;
            }
            else
            {
                return false;
            }
        }

        #endregion

        #region Song

        //***************************************************************************************Song *****************************************************************

        /// <summary>
        /// Get all the album in the database
        /// </summary>
        /// <returns></returns>
        public IEnumerable<Song> SongGetAllItems()
        {
            return _sqlLiteDbContext.Songs;
        }

        /// <summary>
        /// Get a album by id
        /// </summary>
        /// <param name="Id"> id of album to be found</param>
        /// <returns></returns>
        public Song SongGetById(int Id)
        {
            var result = _sqlLiteDbContext.Songs.First(album => album.SongId == Id);
            return result;
        }

        /// <summary>
        /// To add a album
        /// </summary>
        /// <param name="addedSong"> album to add </param>
        /// <returns></returns>
        public Song SongAddItem(Song addedSong)
        {
            var result = _sqlLiteDbContext.Songs.FirstOrDefault(album => album.SongName == addedSong.SongName);
            if (result == null)
            {
                _sqlLiteDbContext.Songs.Add(addedSong);
                _sqlLiteDbContext.SaveChanges();
                var tempSong = _sqlLiteDbContext.Songs.First(album => album.SongName == addedSong.SongName);
                return tempSong;
            }
            else
            {
                return null;
            }

        }

        /// <summary>
        /// To delete a album
        /// </summary>
        /// <param name="Id"> id of album to delete </param>
        /// <returns></returns>
        public Song SongDeleteItem(int Id)
        {
            var tempSong = _sqlLiteDbContext.Songs.First(album => album.SongId == Id);
            if (tempSong != null)
            {
                _sqlLiteDbContext.Songs.Remove(tempSong);
                _sqlLiteDbContext.SaveChanges();
                return tempSong;
            }
            else
            {
                return null;
            }
        }

        /// <summary>
        /// Update a album 
        /// </summary>
        /// <param name="updatedSong"> album to be updated to </param>
        /// <returns></returns>
        public Song SongUpdateItem(Song updatedSong)
        {
            var result = _sqlLiteDbContext.Songs.First(album => album.SongId == updatedSong.SongId);
            if (result != null)
            {

                result.SongName = updatedSong.SongName;
                result.ArtistName = updatedSong.ArtistName;
                result.AlbumName = updatedSong.AlbumName;
                result.GenreName = updatedSong.GenreName;
                result.ArtistId = updatedSong.ArtistId;
                result.GenreId = updatedSong.GenreId;
                result.ArtistId = updatedSong.ArtistId;
                _sqlLiteDbContext.Songs.Update(result);
                _sqlLiteDbContext.SaveChanges();
                var tempSong = _sqlLiteDbContext.Songs.First(album => album.SongId == updatedSong.SongId);
                return tempSong;
            }
            else
            {
                return null;
            }
        }

        /// <summary>
        /// Tests if the album can be deleted
        /// </summary>
        /// <param name="Id"> id of genre deleted </param>
        /// <returns></returns>
        public bool SongCanDeleteItem(int Id)
        {
            var result = true;
            return result;
        }

        #endregion

    }
}
