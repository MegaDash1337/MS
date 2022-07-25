namespace MSAPI.Models
{
    public class Contact
    {
        public Contact(int id, string name, string shortname)
        {
            Id = id;
            Name = name;
            Shortname = shortname;
        }

        public Contact(User user)
        {
            Id = user.Id;
            Name = user.Name;
            Shortname = user.Shortname;
        }

        public int Id { get; set; }
        public string? Name { get; set; }
        public string? Shortname { get; set; }
    }
}
