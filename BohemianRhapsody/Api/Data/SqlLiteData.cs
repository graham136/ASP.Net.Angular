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

            if (!Genres.Any())
            {
                GenreAddItem(new Genre { GenreName = "Rock", GenreId=0 });
            }

            if (!Artists.Any())
            {
                ArtistAddItem(new Artist { ArtistName = "Bon Jovi", ArtistId=0 });
            }

            if (!Albums.Any())
            {
                AlbumAddItem(new Album { AlbumName = "Its my life", ArtistName="Bon Jovi", AlbumId=0, ArtistId=0 });
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
            var result = false;
            return result;
        }

        #endregion

        #region Artists

        //***************************************************************************************Artists *****************************************************************

        /// <summary>
        /// Get all the artists in the database
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
            var result = false;
            return result;
        }

        #endregion

        #region Album

        //***************************************************************************************Album *****************************************************************

        /// <summary>
        /// Get all the artists in the database
        /// </summary>
        /// <returns></returns>
        public IEnumerable<Album> AlbumGetAllItems()
        {
            return _sqlLiteDbContext.Albums;
        }

        /// <summary>
        /// Get a artist by id
        /// </summary>
        /// <param name="Id"> id of artist to be found</param>
        /// <returns></returns>
        public Album AlbumGetById(int Id)
        {
            var result = _sqlLiteDbContext.Albums.First(artist => artist.AlbumId == Id);
            return result;
        }

        /// <summary>
        /// To add a artist
        /// </summary>
        /// <param name="addedAlbum"> artist to add </param>
        /// <returns></returns>
        public Album AlbumAddItem(Album addedAlbum)
        {
            var result = _sqlLiteDbContext.Albums.FirstOrDefault(artist => artist.AlbumName == addedAlbum.AlbumName);
            if (result == null)
            {
                _sqlLiteDbContext.Albums.Add(addedAlbum);
                _sqlLiteDbContext.SaveChanges();
                var tempAlbum = _sqlLiteDbContext.Albums.First(artist => artist.AlbumName == addedAlbum.AlbumName);
                return tempAlbum;
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
        public Album AlbumDeleteItem(int Id)
        {
            var tempAlbum = _sqlLiteDbContext.Albums.First(artist => artist.AlbumId == Id);
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
        /// Update a artist 
        /// </summary>
        /// <param name="updatedAlbum"> artist to be updated to </param>
        /// <returns></returns>
        public Album AlbumUpdateItem(Album updatedAlbum)
        {
            var result = _sqlLiteDbContext.Albums.First(artist => artist.AlbumId == updatedAlbum.AlbumId);
            if (result != null)
            {

                result.AlbumName = updatedAlbum.AlbumName;
                result.ArtistName = updatedAlbum.ArtistName;
                _sqlLiteDbContext.Albums.Update(result);
                _sqlLiteDbContext.SaveChanges();
                var tempAlbum = _sqlLiteDbContext.Albums.First(artist => artist.AlbumId == updatedAlbum.AlbumId);
                return tempAlbum;
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
        public bool AlbumCanDeleteItem(int Id)
        {
            var result = false;
            return result;
        }

        #endregion

    }
}
