import { useState ,useEffect } from "react";
import Bloglist from "./Bloglist";
const Blogs = () => {
    const [name,setName]=useState("Muhibullah");
    const [blog,setBlog]=useState([
        {title:"Algorithm and Data Structure  ",author:"Muhibullah",id:1},
        {title:"English book ",author:'Hanji Ahmad ',id:2},
        {title:"Web technology  ",author:"Muhibullah",id:3}]);
        
        const handleDelete=(id)=>{
            const newblog=blog.filter(blog => blog.id!==id);
            setBlog(newblog);
        };

        useEffect(()=>{
            console.log("effect function run ");
        },[name])

        
    return ( 
        <div className="bl">
        <h1>{name}</h1>
        <button onClick={()=>{setName("Ezatullah")}}>Change name </button>
        <Bloglist blogs={blog} title="Blogs list is complete " handleDelete={handleDelete}></Bloglist>
        <Bloglist blogs={blog.filter((blog)=>blog.author==="Muhibullah")} title="Only Muhibullah Noorzad  "></Bloglist>

       
       
    </div>
    )
}
 
export default Blogs;