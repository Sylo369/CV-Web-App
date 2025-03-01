using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;

namespace Persistence
{
    public class DbInitializer
    {
        public static async Task SeedData (AppDbContext context)
        {
            if (context.Portfolios.Any()) return;

            var portfolios = new List<Portfolio>
            {
                new Portfolio
                {
                    Name = "Dimitar Kuzmanov",
                    TechStack = "C#, Javascript, React",
                    Position = "Junior Full-Stack Dev",
                    Projects = new List<Project>{

                        new Project
                        {
                            Title = "E-Commerce Website",
                            StartDate = new DateTime(2024, 03, 15),
                            OnGoing = true
                        },
                        new Project
                        {
                            Title = "Diploma Project",
                            StartDate = new DateTime(2022, 12, 28),
                            EndDate = new DateTime(2023, 04, 04),
                            OnGoing = false
                        },
                      
                    }
                    
                }
            };

            context.Portfolios.AddRange(portfolios);
            await context.SaveChangesAsync();
        }
    }
}