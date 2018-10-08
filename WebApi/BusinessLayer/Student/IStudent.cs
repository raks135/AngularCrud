using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Model;

namespace BusinessLayer.Student
{
    public interface IStudent
    {
        List<SpStudentSel_Result> StudentSel();
        ReturnMessageModel AddStudent(StudentModel model);
        ReturnMessageModel UpdateStudent(StudentModel model);
        ReturnMessageModel DeleteEmployee(int studentId);
        List<SpGetStudentById_Result> GetStudentById(int studentId);
    }
}
