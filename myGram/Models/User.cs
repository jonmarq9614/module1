using System;
namespace myGram.Models
{
    public class User
    {
        public User()
        {
        }


        public string UserName { get; set; }
        public string Password { get; set; }

        public override string ToString()
        {
            return $"Username is: [{this.UserName}] and password is: [{this.Password}]";
        }
    }
}
