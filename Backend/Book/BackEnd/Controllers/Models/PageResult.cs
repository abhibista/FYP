using System.Collections.Generic;

namespace Book.Models
 {
    public class PageResult<T> where T : class
    {

        public int CurrentPage { get; set; }
        public int ItemPerPage { get; set; }
        public List<T> Items { get; set; }
        public int TotalItems { get; set; }
        public int TotalPages { get; set; }
    }
}