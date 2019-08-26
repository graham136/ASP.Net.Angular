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
    public class GenreController: Controller
    {

        IEnumerable<Genre> Genres;

        private IMusicData _sqlLiteData;
        /// <summary>
        /// Constructor 
        /// </summary>
        /// <param name="SqlLiteData">Controller that implements IMusicData api calls for Sqlite Database </param>
        public GenreController(IMusicData SqlLiteData)
        {
            _sqlLiteData = SqlLiteData;
            Genres = _sqlLiteData.GenreGetAllItems();
        }

        /// <summary>
        /// Gets all the genres
        /// </summary>
        /// <returns></returns>
        [HttpGet("[action]")]
        public ActionResult GenreGetAllItems()
        {
            var result = _sqlLiteData.GenreGetAllItems();
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
        /// Gets a genre by id, typically we would use a guid, but i made it an int so you can check the functionality.
        /// </summary>
        /// <param name="Id"></param>
        /// <returns></returns>
        [HttpGet("[action]")]
        public ActionResult GenreGetById(int Id)
        {
            var result = _sqlLiteData.GenreGetById(Id);
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
        /// Adds a genre
        /// </summary>
        /// <param name="addedGenre">the genre object to add</param>
        /// <returns></returns>
        [HttpPost("[action]")]
        public ActionResult GenreAddItem([FromBody]Genre addedGenre)
        {
            var result = _sqlLiteData.GenreAddItem(addedGenre);
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
        /// Updates a genre
        /// </summary>
        /// <param name="updatedGenre">the genre object to update</param>
        /// <returns></returns>
        [HttpPut("[action]")]
        public ActionResult GenreUpdateItem([FromBody]Genre updatedGenre)
        {
            var result = _sqlLiteData.GenreUpdateItem(updatedGenre);
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
        /// Deletes a genre by id. This is only done after Genre Delete Item is called.
        /// </summary>
        /// <param name="Id"></param>
        /// <returns></returns>
        [HttpDelete("[action]")]
        public ActionResult GenreDeleteItem(int Id)
        {
            var result = _sqlLiteData.GenreDeleteItem(Id);
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
        /// Checks is the genre can be deleted. IE it not referenced in a song.
        /// </summary>
        /// <param name="Id"></param>
        /// <returns></returns>
        [HttpGet("[action]")]
        public ActionResult GenreCanDeleteItem(int Id)
        {
            var result = _sqlLiteData.GenreCanDeleteItem(Id);
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
