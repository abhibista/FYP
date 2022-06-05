namespace Book.Models
{
    public class PageModel
    {
        public int PageNumber { get; set; }
        public string Query { get; set; }
        public string SearchBy { get; set; }
        public string SortBy { get; set; }
        public bool SortDesc { get; set; }
    }

}