using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace leaveManAPI.Models
{
    public class Employee
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string DOB { get; set; }
        public string DOJ { get; set; }
        public int Salary { get; set; }
        public string Email { get; set; }
        public string Role { get; set; }
        public string TotalLeave { get; set; }
    }
}
