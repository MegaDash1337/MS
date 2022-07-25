namespace MSAPI.Models
{
    public class User
    {
        public User(string name, string password, string email, string shortname, int id)
        {
            Name = name;
            Password = password;
            Email = email;
            Shortname = shortname;
            Id = id;
        }

        public User()
        {
        }

        public int Id { get; set; }
        public string? Name { get; set; }
        public string? Password { get; set; }
        public string? Email { get; set; }
        public string? Shortname { get; set; }
    }
}