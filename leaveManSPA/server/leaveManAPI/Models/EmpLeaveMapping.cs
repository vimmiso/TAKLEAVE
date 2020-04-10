using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace leaveManAPI.Models
{
    public class EmpLeaveMapping
    {
        public int Id { get; set; }
        public int EmployeeId { get; set; }
        public int LeaveId { get; set; }
        public string Status { get; set; }
        public string StartDate { get; set; }
        public string EndDate { get; set; }
        public string LeaveType { get; set; }
        public int NoofDays { get; set; }
    }
}
