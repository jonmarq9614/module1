using System;
namespace myGram.Models
{
    public class RegisteringClass
    {
        public RegisteringClass()
        {
        }

        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Gender { get; set; }
        public string Email { get; set; }
        public string Country { get; set; }

        public override string ToString()
        {
            return $"User saved the user information is the following: Name [{this.FirstName} {this.LastName}], Gender [{this.Gender}], Email [{this.Email}], Country [{this.Country}]";
        }
    }
}
