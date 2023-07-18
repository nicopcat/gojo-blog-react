import { useParams } from 'react-router-dom';
import useFetch from './useFetch';

const BlogDetails = () => {
  const { id } = useParams();
  const { data: blog, isPending, error } = useFetch('http://localhost:8000/blogs/' + id);

  return (  
    <div className="blog-details">
      {isPending && <div>loading ... </div>}
      {error && <div>something's wrong, {error}</div>}
      {blog && 
        <div>
          <h2>{blog.title}</h2>
          <p className="content"> {blog.body} </p>
        </div>}
    </div>
  );
}
 
export default BlogDetails;