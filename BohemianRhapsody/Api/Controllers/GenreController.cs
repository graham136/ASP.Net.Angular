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
        public GenreController(IMusicData SqlLiteData)
        {
            _sqlLiteData = SqlLiteData;
            Genres = _sqlLiteData.GenreGetAll();
        }

        [HttpGet("[action]")]
        public ActionResult GenreGetAll()
        {
            var result = _sqlLiteData.GenreGetAll();
            if (result != null)
            {
                return Ok(result);
            }
            else
            {
                return NotFound(result);
            }
        }

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

        [HttpPost("[action]")]
        public ActionResult GenreAdd([FromBody]Genre addedGenre)
        {
            var result = _sqlLiteData.GenreAdd(addedGenre);
            if (result != null)
            {
                return Ok(result);
            }
            else
            {
                return BadRequest(result);
            }
        }

        [HttpPut("[action]")]
        public ActionResult GenreUpdate([FromBody]Genre updatedGenre)
        {
            var result = _sqlLiteData.GenreUpdate(updatedGenre);
            if (result != null)
            {
                return Ok(result);
            }
            else
            {
                return NotFound(result);
            }
        }

        [HttpDelete("[action]")]
        public ActionResult GenreDelete(int Id)
        {
            var result = _sqlLiteData.GenreDelete(Id);
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
