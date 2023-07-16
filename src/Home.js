import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([

  ]);
  const [name, setName] = useState('jack');

  const handleDelete = (id) => {
    const filteredBlogs = blogs.filter(x => x.id !== id)
    setBlogs(filteredBlogs);
  }

  useEffect(() => {
    console.log('你好，useEffect');
  },[name])

  return (  
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
      {name}
      <button onClick={()=>setName('MA')}>Change name</button>
    </div>
  );
}
 
export default Home;