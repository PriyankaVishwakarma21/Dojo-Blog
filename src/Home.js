import { useEffect, useState } from "react";
import BlogList from "./BlogList";
import usefecth from "./useFecth";

const Home = () => {
const {data:blogs , isPending , error} = usefecth(`http://localhost:8000/blogs`);

//   const [blogs, setBlogs] = useState(null)
//   const [isPending ,setIsPending] = useState(true);
//   const [error,setError ] = useState(null);

//   useEffect(() => {
//     setTimeout(()=>{
//         fetch('http://localhost:8000/blogs')
//       .then(res => {
//           console.log(res);
//           if(!res.ok){
//               throw Error('could not load data for that resource');
//           }
//         return res.json();
//       })
//       .then(data => {
//         setBlogs(data);
//         setIsPending(false);
//         setError(null);
//       })
//       .catch(err=>{
//           setIsPending(false);
//           setError(err.message);
//         //   console.log(err.message);
//         })
//     },1000)
//   }, []);

  return (
    <div className="home">
        {error && <div>{error}</div>}
        {isPending && <div>Loading..</div>}
      {blogs && <BlogList blogs={blogs} />}
    </div>
  );
}
 
export default Home;