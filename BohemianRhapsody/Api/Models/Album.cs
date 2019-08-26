using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BohemianRhapsody.Api.Models
{
    public class Album
    {
        [Key]
        public int AlbumId { get; set; }
        [Required]
        public string AlbumName { get; set; }
        [Required]
        public int ArtistId { get; set; }
        [Required]
        public string ArtistName { get; set; }
    }
}
