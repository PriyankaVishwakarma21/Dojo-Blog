import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [title,setTitle] = useState('');
    const [body,setBody] = useState('');
    const [author,setAuthor] = useState('yoshi');
    const [isPending,setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e)=>{
        e.preventDefault(); // prevents refresh 
        const blog = {title,body,author};
        setIsPending(true);
        fetch(`http://localhost:8000/blogs`,{
            method:'POST',
            headers : {"content-type":"application/JSON"},
            body : JSON.stringify(blog)//converts object into json formate
        }).then(()=>{
            console.log("new blog added...");
            setIsPending(false);
           // history.go(-1); backword page
           history.push('/');
        });
        
    }
    return ( 

        <div className="create">
            <h2>Add new blog</h2>
            <form onSubmit={handleSubmit} >
                <label>Blog Title: </label>
                <input 
                type="text" required
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
                />
                <label>Blog Body:</label>
                <textarea 
                required
                value = {body}
                onChange={(e)=>setBody(e.target.value)}
                ></textarea>
                <label>Blog author:</label>
                <select 
                value={ author}
                onChange={(e)=>setAuthor(e.target.value)}
                >
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                    <option value="priyanka">priyanka</option>
                </select>
             {!isPending&&  <button>Add Blog</button>}
             {isPending&&  <button disabled>Add Blog...</button>}
            </form>
        </div>

     );
}
 
export default Create;