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
    public class LeaveController : ControllerBase
    {
        // GET: /<controller>/
        //public IActionResult Index()
        //{
        //    return View();
        //}


        private readonly DataContext _db;


        public LeaveController(DataContext db)
        {
            _db = db;
        }
        

        [HttpGet]
        public ActionResult<IEnumerable<Leave>> Get()
        {
            var leave = _db.Leaves.ToList();
            return Ok(leave);
        }

        [HttpGet("{id}")]
        public ActionResult<Leave> Get(int id)
        {
            var l = _db.Leaves.FirstOrDefault(a => a.Id == id);
            return Ok(l);
        }

        // [HttpPost]
        // public void Post([FromBody] string value)
        // {

        // }
        [HttpPost]
        public ActionResult<Leave> Post([FromBody] Leave leave)
        {
            _db.Leaves.Add(leave);
            _db.SaveChanges();
            return Ok(leave);
            
        }

        [HttpPut("{id}")]
        public ActionResult<Leave> Put(int id, [FromBody] Leave leave)
        {
            var l = _db.Leaves.FirstOrDefault(a => a.Id == id);
            l.Name = leave.Name;
            l.MaxLeaves = leave.MaxLeaves;
            _db.SaveChanges();
            return Ok(l);
        }

        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            var l = _db.Leaves.FirstOrDefault(a => a.Id == id);
            _db.Leaves.Remove(l);
            _db.SaveChanges();
        }

    }
}
