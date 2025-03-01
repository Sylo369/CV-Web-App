using System;
using System.Collections.Generic;
using System.Dynamic;
using System.Linq;
using System.Threading.Tasks;

namespace Domain
{
    public class Portfolio
    {
        public Guid Id { get; set; }

        public required string Name { get; set; }

        public required string Position { get;set;}

        public required string TechStack {get; set;}

        public required ICollection<Project> Projects {get;set;}


    }
}