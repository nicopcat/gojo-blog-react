import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('');
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();


  const handleSubmit = (e) => {
    const blog = JSON.stringify({ title, body, author });
    setIsPending(true);
    fetch('https://json-server-for-gojo.vercel.app/blogs', {
      method: 'POST',
      headers: {
        'Content-Type':'application/json'
      },
      body: blog
    }).then((res) => {
      console.log(res);
      setIsPending(false);
      if (res.ok) {
        alert("博客发表成功!");
        // history.go(-1);
        history.push('/')
      } else {
        alert(res.status + '，上传失败')
      }
    }).catch((err) => {
      throw err;
    })
  }

  return ( 
    <div className="create">
      <h2>Create a new blog</h2>
      <div className="content">
        {isPending && <div>上传中……</div> }
        <form onSubmit={handleSubmit}>
          <label>标题</label>
          <input type="text" required value={title} onChange={(e)=>setTitle(e.target.value)} />
          <label>内容</label>
          <textarea required rows={ 10} value={body} onChange={(e)=>setBody(e.target.value)}/>
          <label>作者</label>
          <input type="text" required  value={author} onChange={(e)=>setAuthor(e.target.value)}/>
        </form>
        <button onClick={handleSubmit} disabled={isPending}>{ isPending? "正在提交……":"提 交" }</button>
      </div>
    </div>
   );
}
 
export default Create;