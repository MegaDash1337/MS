using Microsoft.AspNetCore.Mvc;
using MSAPI.Database;
using MSAPI.Models;

namespace MSAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly DatabaseContext _context;
        public UsersController()
        {
            _context = new DatabaseContext();
        }

        [HttpPost("register/")]
        public async Task<ActionResult<User>> Register(User user)
        {
            if (!CheckNullUser(user))
                return BadRequest(new SingleStringProperty("Some of user fields was null or empty"));

            if (IsShortNameTaken(user.Shortname))
                return BadRequest(new SingleStringProperty("This shortname is taken, try to set another"));

            if (IsEmailTaken(user.Email))
                return BadRequest(new SingleStringProperty("This email is taken, try to set another"));

            user.Password = user.Password?.GetSHA256();

            await _context.Users.AddAsync(user);
            await _context.SaveChangesAsync();

            return user;
        }

        [HttpPost("check_shortname/")]
        public bool CheckShortName([FromBody] SingleStringProperty shortName)
        {
            return IsShortNameTaken(shortName.Property);
        }

        [HttpPost("check_email/")]
        public bool CheckEmail([FromBody] SingleStringProperty email)
        {
            return IsEmailTaken(email.Property);
        }

        [HttpPost("by_short_name/")]
        public List<Contact> GetContactsByShortName([FromBody] SingleStringProperty shortName)
        {
            var users = _context.Users.Where(user => user.Shortname.Contains(shortName.Property));
            var contacts = new List<Contact>();

            foreach (var user in users)
            {
                contacts.Add(new Contact(user));
            }

            return contacts;
        }

        private bool IsShortNameTaken(string shortName)
        {
            return _context.Users.Where(user => user.Shortname == shortName).Any();
        }

        private bool IsEmailTaken(string email)
        {
            return _context.Users.Where(user => user.Email == email).Any();
        }

        private static bool CheckNullUser(User user)
        {
            return !string.IsNullOrEmpty(user.Name)
                && !string.IsNullOrEmpty(user.Password)
                && !string.IsNullOrEmpty(user.Email)
                && !string.IsNullOrEmpty(user.Shortname);
        }
    }
}
