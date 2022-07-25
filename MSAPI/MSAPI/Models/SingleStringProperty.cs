namespace MSAPI.Models
{
    public class SingleStringProperty
    {
        public SingleStringProperty(string property)
        {
            Property = property;
        }

        public SingleStringProperty()
        {
        }

        public string Property { get; set; }

    }
}