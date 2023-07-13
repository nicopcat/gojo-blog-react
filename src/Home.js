import { useState } from "react";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { id: 1, title: 'today1', body: 'lorem1', author: 'mario1' },
    {id:2, title:'today2', body:'lorem2', author:'mario2'},
    {id:3, title:'today3', body:'lorem3', author:'mario3'},
  ]);


  return (  
    <div className="home">
      {blogs.map(x => (
        <div className="blog-preview" key={x.id}>
          <h2>{ x.title}</h2>
          <p>{x.body}</p>
          <p>By { x.author}</p>
        </div>
      ))}
    </div>
  );
}
 
export default Home;