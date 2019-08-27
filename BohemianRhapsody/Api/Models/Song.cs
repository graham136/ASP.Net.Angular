using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BohemianRhapsody.Api.Models
{
    public class Song
    {
        [Key]
        public int SongId { get; set; }
        [Required]
        public string SongName { get; set; }
        [Required]
        public int GenreId { get; set; }
        [Required]
        public string GenreName { get; set; }
        [Required]
        public int ArtistId { get; set; }
        [Required]
        public string ArtistName { get; set; }
        public int AlbumId { get; set; }
        public string AlbumName { get; set; }
    }
}
