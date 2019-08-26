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
        private SqlLiteDbContext _sqlLiteDbContext;

        /// <summary>
        /// Constructor
        /// </summary>
        public SqlLiteData()
        {
            _sqlLiteDbContext = new SqlLiteDbContext();
            Genres = _sqlLiteDbContext.Genres;

            if (!Genres.Any())
            {
                GenreAddItem(new Genre { GenreName = "Rock" });
            }

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
    }
}
