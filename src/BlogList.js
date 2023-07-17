const BlogList = ({blogs, title}) => {

  return ( 
    <div className="blog-list">
      <h2>{title}</h2>
      {blogs.map(x => (
      <div className="blog-preview" key={x.id}>
        <h2>{ x.title}</h2>
        <p>{x.body}</p>
        <p>By {x.author}</p>
        <br />
      </div> ))}
  </div>
   );
}
 
export default BlogList;