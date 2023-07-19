import { useParams } from 'react-router-dom';
import useFetch from './useFetch';
import { useHistory} from 'react-router-dom'

const BlogDetails = () => {
  const { id } = useParams();
  const { data: blog, isPending, error } = useFetch('https://json-server-for-gojo.vercel.app//blogs/' + id);
  const history = useHistory();


  const handleDelete = (id) => {
    const conf = window.confirm('确定删除嘛？');
    if (!conf) return;
    fetch('http://localhost:8000/blogs/' + blog.id, {
      method: 'DELETE',
    }).then((res) => {
      console.log(res);
      if (res.ok) {
        alert('删除成功~');
        history.push('/');
      } else {
        alert('删除失败')
      }
    }).catch(err => {
      throw err
    })
  }

  return (  
    <div className="blog-details">
      {isPending && <div>loading ... </div>}
      {error && <div>something's wrong, {error}</div>}
      {blog && 
        <div>
          <h2>{blog.title}</h2>
          <p className="content"> {blog.body} </p>
        </div>}
      <button onClick={handleDelete}>删 除</button>
    </div>
  );
}
 
export default BlogDetails;