using BohemianRhapsody.Api.Controllers;
using BohemianRhapsody.Api.Interfaces;
using BohemianRhapsody.Api.Models;
using Moq;
using System;
using System.Collections.Generic;
using Xunit;
using Microsoft.AspNetCore.Mvc;
using BohemianRhapsody.Api.Data;

namespace LogicTests
{
    public class ControllerTests
    {
        #region Genre
        [Fact]
        public void TestGenreGetAllItems()
        {
            //Arrange
            var SqlLiteDataMock = new Mock<IMusicData>();           
            var genreController = new GenreController(SqlLiteDataMock.Object);

            //Act
            ActionResult actionResult = genreController.GenreGetAllItems();

            //Assert
            Assert.IsType<OkObjectResult>(actionResult);          
          
        }

        [Fact]
        public void TestGenreGetAllItemsObjectType()
        {
            //Arrange
            var SqlLiteDataMock = new Mock<IMusicData>();
           
            //Act
            var result = SqlLiteDataMock.Object.GenreGetAllItems();

            //Assert
            Assert.IsAssignableFrom<IEnumerable<Genre>>(result);

        }



        [Fact]
        public void TestGenreGetById()
        {
            //Arrange
            var SqlLiteDataMock = new Mock<IMusicData>();
            var genreController = new GenreController(SqlLiteDataMock.Object);

            //Act
            ActionResult actionResult = genreController.GenreGetById(-1);

            //Assert
            Assert.IsType<NotFoundObjectResult>(actionResult);
            
        }
           
        [Fact]
        public void TestGenreAddItem()
        {
            //Arrange
            var SqlLiteDataMock = new Mock<IMusicData>();
            var genreController = new GenreController(SqlLiteDataMock.Object);

            //Act
            ActionResult actionResult = genreController.GenreAddItem(new Genre() { GenreName=null});
            
            // Assert
            Assert.IsType<BadRequestObjectResult>(actionResult);
            
        }

        [Fact]
        public void TestGenreDeleteItem()
        {
            //Arrange
            var SqlLiteDataMock = new Mock<IMusicData>();
            var genreController = new GenreController(SqlLiteDataMock.Object);

            //Act
            ActionResult actionResult = genreController.GenreDeleteItem(-1);

            // Assert
            Assert.IsType<NotFoundObjectResult>(actionResult);
           
        }

        #endregion

        #region Album
        [Fact]
        public void TestAlbumGetAllItems()
        {
            //Arrange
            var SqlLiteDataMock = new Mock<IMusicData>();
            var AlbumController = new AlbumController(SqlLiteDataMock.Object);

            //Act
            ActionResult actionResult = AlbumController.AlbumGetAllItems();

            //Assert
            Assert.IsType<OkObjectResult>(actionResult);

        }

        [Fact]
        public void TestAlbumGetAllItemsObjectType()
        {
            //Arrange
            var SqlLiteDataMock = new Mock<IMusicData>();

            //Act
            var result = SqlLiteDataMock.Object.AlbumGetAllItems();

            //Assert
            Assert.IsAssignableFrom<IEnumerable<Album>>(result);

        }



        [Fact]
        public void TestAlbumGetById()
        {
            //Arrange
            var SqlLiteDataMock = new Mock<IMusicData>();
            var AlbumController = new AlbumController(SqlLiteDataMock.Object);

            //Act
            ActionResult actionResult = AlbumController.AlbumGetById(-1);

            //Assert
            Assert.IsType<NotFoundObjectResult>(actionResult);

        }

        [Fact]
        public void TestAlbumAddItem()
        {
            //Arrange
            var SqlLiteDataMock = new Mock<IMusicData>();
            var AlbumController = new AlbumController(SqlLiteDataMock.Object);

            //Act
            ActionResult actionResult = AlbumController.AlbumAddItem(new Album() { AlbumName = null });

            // Assert
            Assert.IsType<BadRequestObjectResult>(actionResult);

        }

        [Fact]
        public void TestAlbumDeleteItem()
        {
            //Arrange
            var SqlLiteDataMock = new Mock<IMusicData>();
            var AlbumController = new AlbumController(SqlLiteDataMock.Object);

            //Act
            ActionResult actionResult = AlbumController.AlbumDeleteItem(-1);

            // Assert
            Assert.IsType<NotFoundObjectResult>(actionResult);

        }

        #endregion Album

        #region Song
        [Fact]
        public void TestSongGetAllItems()
        {
            //Arrange
            var SqlLiteDataMock = new Mock<IMusicData>();
            var SongController = new SongController(SqlLiteDataMock.Object);

            //Act
            ActionResult actionResult = SongController.SongGetAllItems();

            //Assert
            Assert.IsType<OkObjectResult>(actionResult);

        }

        [Fact]
        public void TestSongGetAllItemsObjectType()
        {
            //Arrange
            var SqlLiteDataMock = new Mock<IMusicData>();

            //Act
            var result = SqlLiteDataMock.Object.SongGetAllItems();

            //Assert
            Assert.IsAssignableFrom<IEnumerable<Song>>(result);

        }



        [Fact]
        public void TestSongGetById()
        {
            //Arrange
            var SqlLiteDataMock = new Mock<IMusicData>();
            var SongController = new SongController(SqlLiteDataMock.Object);

            //Act
            ActionResult actionResult = SongController.SongGetById(-1);

            //Assert
            Assert.IsType<NotFoundObjectResult>(actionResult);

        }

        [Fact]
        public void TestSongAddItem()
        {
            //Arrange
            var SqlLiteDataMock = new Mock<IMusicData>();
            var SongController = new SongController(SqlLiteDataMock.Object);

            //Act
            ActionResult actionResult = SongController.SongAddItem(new Song() { SongName = null });

            // Assert
            Assert.IsType<BadRequestObjectResult>(actionResult);

        }

        [Fact]
        public void TestSongDeleteItem()
        {
            //Arrange
            var SqlLiteDataMock = new Mock<IMusicData>();
            var SongController = new SongController(SqlLiteDataMock.Object);

            //Act
            ActionResult actionResult = SongController.SongDeleteItem(-1);

            // Assert
            Assert.IsType<NotFoundObjectResult>(actionResult);

        }

        #endregion Song

        #region Artist
        [Fact]
        public void TestArtistGetAllItems()
        {
            //Arrange
            var SqlLiteDataMock = new Mock<IMusicData>();
            var ArtistController = new ArtistController(SqlLiteDataMock.Object);

            //Act
            ActionResult actionResult = ArtistController.ArtistGetAllItems();

            //Assert
            Assert.IsType<OkObjectResult>(actionResult);

        }

        [Fact]
        public void TestArtistGetAllItemsObjectType()
        {
            //Arrange
            var SqlLiteDataMock = new Mock<IMusicData>();

            //Act
            var result = SqlLiteDataMock.Object.ArtistGetAllItems();

            //Assert
            Assert.IsAssignableFrom<IEnumerable<Artist>>(result);

        }



        [Fact]
        public void TestArtistGetById()
        {
            //Arrange
            var SqlLiteDataMock = new Mock<IMusicData>();
            var ArtistController = new ArtistController(SqlLiteDataMock.Object);

            //Act
            ActionResult actionResult = ArtistController.ArtistGetById(-1);

            //Assert
            Assert.IsType<NotFoundObjectResult>(actionResult);

        }

        [Fact]
        public void TestArtistAddItem()
        {
            //Arrange
            var SqlLiteDataMock = new Mock<IMusicData>();
            var ArtistController = new ArtistController(SqlLiteDataMock.Object);

            //Act
            ActionResult actionResult = ArtistController.ArtistAddItem(new Artist() { ArtistName = null });

            // Assert
            Assert.IsType<BadRequestObjectResult>(actionResult);

        }

        [Fact]
        public void TestArtistDeleteItem()
        {
            //Arrange
            var SqlLiteDataMock = new Mock<IMusicData>();
            var ArtistController = new ArtistController(SqlLiteDataMock.Object);

            //Act
            ActionResult actionResult = ArtistController.ArtistDeleteItem(-1);

            // Assert
            Assert.IsType<NotFoundObjectResult>(actionResult);

        }

        #endregion Artist
    }
}
