using BusinessLayer;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Model;
using BusinessLayer.Student;

namespace CloudyFox.Controllers
{
    public class StudentController : ApiController
    {
        private IStudent Ics;
        public StudentController()
        {
            Ics = new StudentService();
        }
        [HttpGet]
        [Route("api/Student/StudentSel")]
        public List<SpStudentSel_Result> StudentSel()
        {
            return this.Ics.StudentSel();
        }
        [HttpPost]
        [Route("api/Student/StudentIns")]
        public ReturnMessageModel AddStudent(StudentModel model)
        {
            return this.Ics.AddStudent(model);
        }
        [HttpPost]
        [Route("api/Student/StudentUpd")]
        public ReturnMessageModel UpdateStudent(StudentModel model)
        {
            return this.Ics.UpdateStudent(model);
        }
        [HttpGet]
        [Route("api/Student/StudentDel/{id}")]
        public ReturnMessageModel StudentDel(int id)
        {
            return this.Ics.DeleteEmployee(id);
        }
        [HttpGet]
        [Route("api/Student/StudentGetById/{id}")]
      public  List <SpGetStudentById_Result> StudentGetById(int id)
        {
            return this.Ics.GetStudentById(id);
        }
    }
}
