using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Domain
{
    public class Project
    {
        public string Id = Guid.NewGuid().ToString();
        public required string Title { get; set;}
        public required DateTime StartDate {get;set;}
        public DateTime EndDate {get;set;}
        public required bool OnGoing {get; set;}

    }
}