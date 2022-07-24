using Google.Protobuf.WellKnownTypes;
using Microsoft.EntityFrameworkCore;
using MSAPI.Models;

namespace MSAPI.Database
{
    public class DatabaseContext : DbContext
    {
        private const string DATABASE = "ms.db";

        public DbSet<User> Users { get; set; } = null!;

        public DatabaseContext()
        {
            Database.EnsureCreated();
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlite($"Data Source = {DATABASE}");
        }
    }
}
