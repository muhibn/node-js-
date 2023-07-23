import React, { useState ,useEffect} from "react";
import Bloglist from "./bloglist";

const Blog = () => {
    const [blog, setBlog] = useState(null);
    let [name ,nameState]=useState("Muhibullah");

     const [isPending ,setPending]=useState(true);
     const [error ,setError]=useState(null);

    useEffect(()=>{

        setTimeout(() => {
            fetch('http://localhost:8000/blogss').then(res=>{
                console.log(res);
                if(!res.ok)
                {
                    throw Error("The servers is not exist ");

                }
                return res.json()}).then(data=>{
               console.log(data);setBlog(data); 
               setPending(false);
               }).catch(err => 
                {
                    setPending(false);
                    console.log(err.message);
                    setError(err.message);
                })
            
        }, 100);

    } ,[] )

    const changeName=(newName)=>{
        nameState(newName);
        
    }

    const handleDelete = (id) => {
        const newBlog = blog.filter(blogItem => blogItem.id !== id);
        setBlog(newBlog);

    }

    return (
        <div className="container">
            {error && <div>{error}</div>}
           { isPending && <div>Loading..</div>}
           {blog &&  <Bloglist blogs={blog} handleDelete={handleDelete} /> }
            <button  onClick={()=>changeName("Ezatullah")}>change name </button>
            <h1>{name}</h1>
        </div>
    );
}

export default Blog;
