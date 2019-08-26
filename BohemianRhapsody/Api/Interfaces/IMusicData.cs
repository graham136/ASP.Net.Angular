using BohemianRhapsody.Api.Models;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BohemianRhapsody.Api.Interfaces
{
    public interface IMusicData
    {
        IEnumerable<Genre> GenreGetAllItems();
        Genre GenreGetById(int Id);
        Genre GenreUpdateItem(Genre updatedGenre);
        Genre GenreAddItem(Genre addedGenre);
        Genre GenreDeleteItem(int Id);
        bool GenreCanDeleteItem(int Id);
    }
}
