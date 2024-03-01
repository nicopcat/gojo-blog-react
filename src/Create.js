import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Button,Form ,Input } from 'antd';

const Create = () => {
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();
  const [form] = Form.useForm();
  const [formLayout] = useState('vertical');

  const onFinish = (values ) => {
    console.log(values);
    const blog = JSON.stringify(values);
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
  };

  return ( 
    <div className="create">
      <h2>Create a new blog</h2>
      <div className="content">
        {isPending && <div>上传中……</div> }
        <Form
    
      layout={formLayout}
      form={form}
      initialValues={{
        layout: formLayout,
      }}
      onFinish={onFinish}
      style={{
        maxWidth: formLayout === 'inline' ? 'none' : 600,
      }}
    >

      <Form.Item name='title' label="Title">
        <Input placeholder="" />
      </Form.Item>
      <Form.Item name='body'  label="Content">
       <Input.TextArea rows={6}/>
      </Form.Item>
      <Form.Item label="Author"  name='author' >
        <Input placeholder="" />
      </Form.Item>
      <Form.Item  >
        <Button className="btn" type="primary" htmlType="submit"  loading={isPending} disabled={isPending}>Submit</Button>
      </Form.Item>
    </Form>
      </div>
    </div>
   );
}
 
export default Create;