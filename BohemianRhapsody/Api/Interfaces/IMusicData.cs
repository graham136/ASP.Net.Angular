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

        IEnumerable<Artist> ArtistGetAllItems();
        Artist ArtistGetById(int Id);
        Artist ArtistUpdateItem(Artist updatedArtist);
        Artist ArtistAddItem(Artist addedArtist);
        Artist ArtistDeleteItem(int Id);
        bool ArtistCanDeleteItem(int Id);

        IEnumerable<Album> AlbumGetAllItems();
        Album AlbumGetById(int Id);
        Album AlbumUpdateItem(Album updatedAlbum);
        Album AlbumAddItem(Album addedAlbum);
        Album AlbumDeleteItem(int Id);
        bool AlbumCanDeleteItem(int Id);
    }
}
