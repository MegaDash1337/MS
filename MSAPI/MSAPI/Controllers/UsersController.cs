using Google.Protobuf;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MSAPI.Database;
using MSAPI.Models;
using System.Net.Sockets;

namespace MSAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        [HttpPost("register/")]
        public async Task<ActionResult<byte[]>> Register(User user)
        {
            var controller = new DatabaseContext();

            user.Password = user.Password.GetSHA256();

            await controller.Users.AddAsync(user);

            return user.ToByteArray();
        }

        [HttpPost("check_shortname/")]
        public async Task<bool> CheckName([FromBody] byte[] shortName)
        {
            return true;
        }
    }
}
