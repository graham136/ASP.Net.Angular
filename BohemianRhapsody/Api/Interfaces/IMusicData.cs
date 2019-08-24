using BohemianRhapsody.Api.Models;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BohemianRhapsody.Api.Interfaces
{
    interface IMusicData
    {
        IEnumerable<Genre> GenreGetAll();
        Genre GenreGetById(int Id);
        Genre GenreUpdate(Genre updatedGenre);
        Genre GenreAdd(Genre addedGenre);
        Genre GenreDelete(int Id);
    }
}
