using System.Security.Cryptography;
using System.Text;

namespace MSAPI
{
    public static class Extensions
    {
        public static string GetSHA256(this string str)
        {
            var sha = SHA256.Create();
            return Convert.ToBase64String(sha.ComputeHash(Encoding.UTF8.GetBytes(str)));
        }
    }
}
