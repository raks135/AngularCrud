using System;
using System.Text;
using System.Collections.Generic;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using BusinessLayer.Student;
using Model;
using Newtonsoft.Json;
using System.Data.Entity.Core.Objects;

namespace UnitTest.Student
{
    /// <summary>
    /// Summary description for UnitTestStudent
    /// </summary>
    [TestClass]
    public class UnitTestStudent
    {
        private StudentService ss;
        public UnitTestStudent()
        {
            this.ss = new StudentService();
        }
       


        [TestMethod]
        public void AddStudent_WithAllMandatoryFieldsOnly()
        {
            StudentModel data = new StudentModel();
            string jsonParamerter = "{\"FirstName\":\"Rakesh\",\"LastName\":\"Bam\",\"Faculty\":\"Science\",\"Phone\":\"9843101478\",\"Email\":\"rabm@yahoo.com\"}";
            data = JsonConvert.DeserializeObject<StudentModel>(jsonParamerter);
            ReturnMessageModel result = new ReturnMessageModel();
            ObjectParameter returnMessage = new ObjectParameter("ReturnMessage", typeof(String));
            try
            {
                result = ss.AddStudent(data);
            }
            catch (Exception)
            {
                throw;
            }
            Assert.AreEqual("Saved Successfully", result.ReturnMessage);
        }
    }
    }

