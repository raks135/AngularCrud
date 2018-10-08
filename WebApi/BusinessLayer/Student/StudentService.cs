using System;
using System.Collections.Generic;
using System.Data.Entity.Core.Objects;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Model;
using Newtonsoft.Json;

namespace BusinessLayer.Student
{
   public class StudentService : IStudent
    {
        #region Student
        public ReturnMessageModel AddStudent(StudentModel model)
        {

            ReturnMessageModel result = new ReturnMessageModel();
            ObjectParameter returnMessage = new ObjectParameter("ReturnMessage", typeof(String));
            using (StudentEntities db = new StudentEntities())
            {
                try
                {
                    db.SpStudentIns(model.FirstName, model.MiddleName, model.LastName, model.Faculty, model.Phone, model.Email, returnMessage);
                    result.ReturnMessage = returnMessage.Value.ToString();
                  
                }
                catch (Exception e)
                {
                    result.ErrorMessage = e.InnerException.ToString();
                }
                return result;
            }

        }

        public List<SpStudentSel_Result> StudentSel()
        {
            List<SpStudentSel_Result> result = new List<SpStudentSel_Result>();
            using (StudentEntities db = new StudentEntities())
            {
                try
                {
                    result = db.SpStudentSel().ToList();

                }

                catch (Exception e)
                {
                    throw e;
                }
            }
            return result;
        }
        public List<SpGetStudentById_Result> GetStudentById(int StudentId)
        {
            List< SpGetStudentById_Result > result = new List<SpGetStudentById_Result>();
            using (StudentEntities db = new StudentEntities())
            {
                try
                {
                    result = db.SpGetStudentById(StudentId).ToList();

                }

                catch (Exception e)
                {
                    throw e;
                }
            }
            return result;
        }

        public ReturnMessageModel UpdateStudent(StudentModel model)
        {
            ReturnMessageModel result = new ReturnMessageModel();
            var jsoninternalsuminsuredlimit = JsonConvert.SerializeObject(model);
            ObjectParameter returnMessage = new ObjectParameter("ReturnMessage", typeof(String));
            using (StudentEntities db = new StudentEntities())
            {
                try
                {
                    db.SpStudentUpd(model.StudentId, model.FirstName, model.MiddleName, model.LastName, model.Faculty, model.Phone, model.Email, returnMessage);
                    result.ReturnMessage = returnMessage.Value.ToString();

                }
                catch (Exception e)
                {
                    result.ErrorMessage = e.InnerException.ToString();
                }

            }
            return result;
        }

            public ReturnMessageModel DeleteEmployee(int studentId)
        {
            ReturnMessageModel result = new ReturnMessageModel();
            ObjectParameter returnMessage = new ObjectParameter("ReturnMessage", typeof(String));
            using (StudentEntities db = new StudentEntities())
            {
                try
                {
                    db.SpStudentDel(studentId, returnMessage);
                    result.ReturnMessage = returnMessage.Value.ToString();
                }
                catch (Exception e)
                {
                    result.ErrorMessage = e.InnerException.ToString();
                }
                return result;
            }
        }
        #endregion

    }
}
