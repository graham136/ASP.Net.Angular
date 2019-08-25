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

        public SqlLiteData()
        {
            _sqlLiteDbContext = new SqlLiteDbContext();
            Genres = _sqlLiteDbContext.Genres;

            if (!Genres.Any())
            {
                GenreAdd(new Genre { GenreName = "Rock" });
            }

        }

        public Genre GenreAdd(Genre addedGenre)
        {
            var result = _sqlLiteDbContext.Genres.First(genre => genre.GenreName == addedGenre.GenreName);
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

        public Genre GenreDelete(int Id)
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

        public IEnumerable<Genre> GenreGetAll()
        {
            return _sqlLiteDbContext.Genres;
        }

        public Genre GenreGetById(int Id)
        {
            var result = _sqlLiteDbContext.Genres.First(genre => genre.GenreId == Id);
            return result;
        }

        public Genre GenreUpdate(Genre updatedGenre)
        {
            var result = _sqlLiteDbContext.Genres.First(genre => genre.GenreId == updatedGenre.GenreId);
            if (result != null)
            {
                _sqlLiteDbContext.Genres.Update(updatedGenre);
                _sqlLiteDbContext.SaveChanges();
                var tempGenre = _sqlLiteDbContext.Genres.First(genre => genre.GenreId == updatedGenre.GenreId);
                return tempGenre;
            }
            else
            {
                return null;
            }
        }
    }
}
