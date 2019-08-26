using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BohemianRhapsody.Api.Interfaces;
using BohemianRhapsody.Api.Models;
using Microsoft.AspNetCore.Mvc;

namespace BohemianRhapsody.Api.Controllers
{
    [Route("api/[controller]")]
    public class ArtistController: Controller
    {

        IEnumerable<Artist> Artists;

        private IMusicData _sqlLiteData;
        /// <summary>
        /// Constructor 
        /// </summary>
        /// <param name="SqlLiteData">Controller that implements IMusicData api calls for Sqlite Database </param>
        public ArtistController(IMusicData SqlLiteData)
        {
            _sqlLiteData = SqlLiteData;
            Artists = _sqlLiteData.ArtistGetAllItems();
        }

        /// <summary>
        /// Gets all the artists
        /// </summary>
        /// <returns></returns>
        [HttpGet("[action]")]
        public ActionResult ArtistGetAllItems()
        {
            var result = _sqlLiteData.ArtistGetAllItems();
            if (result != null)
            {
                return Ok(result);
            }
            else
            {
                return NotFound(result);
            }
        }

        /// <summary>
        /// Gets a artist by id, typically we would use a guid, but i made it an int so you can check the functionality.
        /// </summary>
        /// <param name="Id"></param>
        /// <returns></returns>
        [HttpGet("[action]")]
        public ActionResult ArtistGetById(int Id)
        {
            var result = _sqlLiteData.ArtistGetById(Id);
            if (result != null)
            {
                return Ok(result);
            }
            else
            {
                return NotFound(result);
            }
        }

        /// <summary>
        /// Adds a artist
        /// </summary>
        /// <param name="addedArtist">the artist object to add</param>
        /// <returns></returns>
        [HttpPost("[action]")]
        public ActionResult ArtistAddItem([FromBody]Artist addedArtist)
        {
            var result = _sqlLiteData.ArtistAddItem(addedArtist);
            if (result != null)
            {
                return Ok(result);
            }
            else
            {
                return BadRequest(result);
            }
        }

        /// <summary>
        /// Updates a artist
        /// </summary>
        /// <param name="updatedArtist">the artist object to update</param>
        /// <returns></returns>
        [HttpPut("[action]")]
        public ActionResult ArtistUpdateItem([FromBody]Artist updatedArtist)
        {
            var result = _sqlLiteData.ArtistUpdateItem(updatedArtist);
            if (result != null)
            {
                return Ok(result);
            }
            else
            {
                return NotFound(result);
            }
        }

        /// <summary>
        /// Deletes a artist by id. This is only done after Artist Delete Item is called.
        /// </summary>
        /// <param name="Id"></param>
        /// <returns></returns>
        [HttpDelete("[action]")]
        public ActionResult ArtistDeleteItem(int Id)
        {
            var result = _sqlLiteData.ArtistDeleteItem(Id);
            if (result != null)
            {
                return Ok(result);
            }
            else
            {
                return NotFound(result);
            }
        }

        /// <summary>
        /// Checks is the artist can be deleted. IE it not referenced in a song.
        /// </summary>
        /// <param name="Id"></param>
        /// <returns></returns>
        [HttpGet("[action]")]
        public ActionResult ArtistCanDeleteItem(int Id)
        {
            var result = _sqlLiteData.ArtistCanDeleteItem(Id);
            if (result != null)
            {
                return Ok(result);
            }
            else
            {
                return NotFound(result);
            }
        }


    }
}
