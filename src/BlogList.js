import { Link } from "react-router-dom/cjs/react-router-dom.min";

const BlogList = ({ blogs, title }) => {
  const detail = (blog) => {
    console.log(blog);

  }

  return ( 
    <div className="blog-preview">
      <h2>{title}</h2>
      {blogs.map(x => (
        <Link to={`/blogs/${x.id}`} key={x.id}>
      <div className="blog-preview"  onClick={()=>{detail(x)}}>
        <h2>{ x.title}</h2>
        <p>By {x.author}</p>
        <br />
          </div>
      </Link> ))}
  </div>
   );
}
 
export default BlogList;