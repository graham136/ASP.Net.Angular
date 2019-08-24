using BohemianRhapsody.Api.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BohemianRhapsody.Api.Data
{
    public class SqlLiteDbContext : DbContext
    {
        public DbSet<Genre> Genres { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {

            optionsBuilder.UseSqlite("Data Source=blogging.db");

        }

    }
}
