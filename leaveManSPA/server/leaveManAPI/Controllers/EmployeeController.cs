using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using leaveManAPI.Data;
using leaveManAPI.Models;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace leaveManAPI.Controllers
{
    [Route("api/[controller]")]
    public class EmployeeController : ControllerBase
    {
        private readonly DataContext _db;

        public EmployeeController(DataContext db)
        {
            _db = db;
        }
        // GET: /<controller>/
        //public IActionResult Index()
        //{
        //    return View();
        //}

        [HttpGet]
        public ActionResult<IEnumerable<Employee>> Get()
        {
            var EmpList = _db.Employees.ToList();
            return Ok(EmpList);
        }

        [HttpGet("{id}")]
        public ActionResult<Employee> Get(int id)
        {
            var emp = _db.Employees.FirstOrDefault(a => a.Id == id);
            return Ok(emp);
        }

        [HttpPost]
        public ActionResult<Employee> Post([FromBody] Employee emp)
        {
            _db.Employees.Add(emp);
            _db.SaveChanges();
            return Ok(emp);
            
        }

        [HttpPut("{id}")]
        public ActionResult<Employee> Put(int id, [FromBody] Employee employee)
        {
            var emp = _db.Employees.FirstOrDefault(a => a.Id == id);
            emp.Name = employee.Name;
            emp.Email = employee.Email;
            emp.DOB = employee.DOB;
            emp.DOJ = employee.DOJ;
            emp.Salary = employee.Salary;
            emp.Role = employee.Role;
            emp.TotalLeave = employee.TotalLeave;
            _db.SaveChanges();
            return Ok(emp);
        }

        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            var emp = _db.Employees.FirstOrDefault(a => a.Id == id);
           _db.Employees.Remove(emp);
           _db.SaveChanges();
           
        }
    }
}
