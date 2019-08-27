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
    public class SongController: Controller
    {

        IEnumerable<Song> Songs;

        private IMusicData _sqlLiteData;
        /// <summary>
        /// Constructor 
        /// </summary>
        /// <param name="SqlLiteData">Controller that implements IMusicData api calls for Sqlite Database </param>
        public SongController(IMusicData SqlLiteData)
        {
            _sqlLiteData = SqlLiteData;
            Songs = _sqlLiteData.SongGetAllItems();
        }

        /// <summary>
        /// Gets all the songs
        /// </summary>
        /// <returns></returns>
        [HttpGet("[action]")]
        public ActionResult SongGetAllItems()
        {
            var result = _sqlLiteData.SongGetAllItems();
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
        /// Gets a song by id, typically we would use a guid, but i made it an int so you can check the functionality.
        /// </summary>
        /// <param name="Id"></param>
        /// <returns></returns>
        [HttpGet("[action]")]
        public ActionResult SongGetById(int Id)
        {
            var result = _sqlLiteData.SongGetById(Id);
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
        /// Adds a song
        /// </summary>
        /// <param name="addedSong">the song object to add</param>
        /// <returns></returns>
        [HttpPost("[action]")]
        public ActionResult SongAddItem([FromBody]Song addedSong)
        {
            var result = _sqlLiteData.SongAddItem(addedSong);
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
        /// Updates a song
        /// </summary>
        /// <param name="updatedSong">the song object to update</param>
        /// <returns></returns>
        [HttpPut("[action]")]
        public ActionResult SongUpdateItem([FromBody]Song updatedSong)
        {
            var result = _sqlLiteData.SongUpdateItem(updatedSong);
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
        /// Deletes a song by id. This is only done after Song Delete Item is called.
        /// </summary>
        /// <param name="Id"></param>
        /// <returns></returns>
        [HttpDelete("[action]")]
        public ActionResult SongDeleteItem(int Id)
        {
            var result = _sqlLiteData.SongDeleteItem(Id);
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
        /// Checks is the song can be deleted. IE it not referenced in a song.
        /// </summary>
        /// <param name="Id"></param>
        /// <returns></returns>
        [HttpGet("[action]")]
        public ActionResult SongCanDeleteItem(int Id)
        {
            var result = _sqlLiteData.SongCanDeleteItem(Id);
            return Ok(result);
        }


    }
}
