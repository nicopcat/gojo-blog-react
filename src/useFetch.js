import { useState ,useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    fetch(url).then((res) => {
      if (!res.ok) {
        throw Error('找不到资源')
      }
      return res.json()
    }).then((res) => {
      setData(res);
    }).catch(err => {
      console.log(err);
      setError(err.message);
    }).finally(()=>{
      setIsPending(false);
    })
  }, [url])

  return {data, isPending, error}
}

export default useFetch;