import { useState } from "react";
import useFetch from "./useFetch";

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('');
  const handleSubmit = (e) => {
    console.log(title);
    const blog = { title, body, author };
    fetch('http://localhost:8000/blogs', {
      method: 'POST',
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify(blog)
    }).then((res) => {
      console.log(res);
      if (res.ok) {
        alert('博客发表成功~')
        
      }
    })
  }

  return ( 
    <div className="create">
      <h2>Create a new blog</h2>
      <div className="content">
        <form onSubmit={handleSubmit}>
          <label>标题</label>
          <input type="text" required value={title} onChange={(e)=>setTitle(e.target.value)} />
          <label>内容</label>
          <textarea required rows={ 10} value={body} onChange={(e)=>setBody(e.target.value)}/>
          <label>作者</label>
          <input type="text" required  value={author} onChange={(e)=>setAuthor(e.target.value)}/>
        </form>
        <button onClick={handleSubmit}>提交</button>
      </div>
    </div>
   );
}
 
export default Create;