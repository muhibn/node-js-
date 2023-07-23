import React, { useState ,useEffect} from "react";
import Bloglist from "./bloglist";

const Blog = () => {
    const [blog, setBlog] = useState(null);
    let [name ,nameState]=useState("Muhibullah");
    useEffect(()=>{
        fetch('http://localhost:8000/blogs').then(res=>{ return res.json()}).then(data=>{console.log(data);setBlog(data); })

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
           {blog &&  <Bloglist blogs={blog} handleDelete={handleDelete} /> }
            <button  onClick={()=>changeName("Ezatullah")}>change name </button>
            <h1>{name}</h1>
        </div>
    );
}

export default Blog;
