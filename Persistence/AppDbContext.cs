using Domain;
using Microsoft.EntityFrameworkCore;

namespace Persistence
{
    public class AppDbContext(DbContextOptions options) : DbContext(options)
    {
     public required DbSet<Portfolio> Portfolios {get; set;}
     public required DbSet<Project> Projects {get; set;}
    }
}