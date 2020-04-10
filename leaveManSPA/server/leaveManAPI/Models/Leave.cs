using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace leaveManAPI.Models
{
    public class Leave
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int MaxLeaves { get; set; }
    }
}
