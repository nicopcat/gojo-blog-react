import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const { data: blogs, isPending, error } = useFetch('https://json-server-for-gojo.vercel.app//blogs');


  return (  
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>加载中。。。</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs" />}
    </div>
  );
}
 
export default Home;