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
    public class AlbumController: Controller
    {

        IEnumerable<Album> Albums;

        private IMusicData _sqlLiteData;
        /// <summary>
        /// Constructor 
        /// </summary>
        /// <param name="SqlLiteData">Controller that implements IMusicData api calls for Sqlite Database </param>
        public AlbumController(IMusicData SqlLiteData)
        {
            _sqlLiteData = SqlLiteData;
            Albums = _sqlLiteData.AlbumGetAllItems();
        }

        /// <summary>
        /// Gets all the albums
        /// </summary>
        /// <returns></returns>
        [HttpGet("[action]")]
        public ActionResult AlbumGetAllItems()
        {
            var result = _sqlLiteData.AlbumGetAllItems();
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
        /// Gets a album by id, typically we would use a guid, but i made it an int so you can check the functionality.
        /// </summary>
        /// <param name="Id"></param>
        /// <returns></returns>
        [HttpGet("[action]")]
        public ActionResult AlbumGetById(int Id)
        {
            var result = _sqlLiteData.AlbumGetById(Id);
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
        /// Adds a album
        /// </summary>
        /// <param name="addedAlbum">the album object to add</param>
        /// <returns></returns>
        [HttpPost("[action]")]
        public ActionResult AlbumAddItem([FromBody]Album addedAlbum)
        {
            var result = _sqlLiteData.AlbumAddItem(addedAlbum);
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
        /// Updates a album
        /// </summary>
        /// <param name="updatedAlbum">the album object to update</param>
        /// <returns></returns>
        [HttpPut("[action]")]
        public ActionResult AlbumUpdateItem([FromBody]Album updatedAlbum)
        {
            var result = _sqlLiteData.AlbumUpdateItem(updatedAlbum);
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
        /// Deletes a album by id. This is only done after Album Delete Item is called.
        /// </summary>
        /// <param name="Id"></param>
        /// <returns></returns>
        [HttpDelete("[action]")]
        public ActionResult AlbumDeleteItem(int Id)
        {
            var result = _sqlLiteData.AlbumDeleteItem(Id);
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
        /// Checks is the album can be deleted. IE it not referenced in a song.
        /// </summary>
        /// <param name="Id"></param>
        /// <returns></returns>
        [HttpGet("[action]")]
        public ActionResult AlbumCanDeleteItem(int Id)
        {
            var result = _sqlLiteData.AlbumCanDeleteItem(Id);
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
