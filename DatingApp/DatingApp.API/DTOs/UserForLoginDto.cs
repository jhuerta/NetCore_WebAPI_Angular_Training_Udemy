using System.ComponentModel.DataAnnotations;

namespace DatingApp.API.DTOs
{
    public class UserForLoginDto
    {
        [Required]
        public string Username { get; set; }
        [Required]
        [MinLength(5)]
        public string Password { get; set; }
    }
}