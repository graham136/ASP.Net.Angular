using BohemianRhapsody.Api.Interfaces;
using BohemianRhapsody.Api.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BohemianRhapsody.Api.Data
{
    public class SqlLiteData : IMusicData

    {
        public Genre GenreAdd(Genre addedGenre)
        {
            throw new NotImplementedException();
        }

        public Genre GenreDelete(int Id)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<Genre> GenreGetAll()
        {
            throw new NotImplementedException();
        }

        public Genre GenreGetById(int Id)
        {
            throw new NotImplementedException();
        }

        public Genre GenreUpdate(Genre updatedGenre)
        {
            throw new NotImplementedException();
        }
    }
}
