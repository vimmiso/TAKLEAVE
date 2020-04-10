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
    public class EmpLeaveMappingController : ControllerBase
    {
        // GET: /<controller>/
        //public IActionResult Index()
        //{
        //    return View();
        //}

        private readonly DataContext _db;


        public EmpLeaveMappingController(DataContext db)
        {
            _db = db;
        }
        // GET: /<controller>/
        //public IActionResult Index()
        //{
        //    return View();
        //}

        [HttpGet]
        public ActionResult<IEnumerable<EmpLeaveMapping>> Get()
        {
            var Empleavemap = _db.EmpLeaveMappings.ToList();
            return Ok(Empleavemap);
        }

        [HttpGet("{id}")]
        public ActionResult<EmpLeaveMapping> Get(int id)
        {
            var map = _db.EmpLeaveMappings.FirstOrDefault(a => a.Id == id);
            return Ok(map);
        }

       
        [HttpPost]
        public ActionResult<EmpLeaveMapping> Post([FromBody] EmpLeaveMapping empleave)
        {
            _db.EmpLeaveMappings.Add(empleave);
             _db.SaveChanges();
            return Ok(empleave);
            
        }

        [HttpPut("{id}")]
        public ActionResult<EmpLeaveMapping> Put(int id, [FromBody] EmpLeaveMapping empleave)
        {
            var map = _db.EmpLeaveMappings.FirstOrDefault(a => a.Id == id);
            map.Status = empleave.Status;
            _db.SaveChanges();
            return Ok(empleave);

        }

        [HttpDelete("{id}")]
        public void Delete(int id)
        {

        }




    }
}
