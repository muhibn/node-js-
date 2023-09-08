import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom";
import { useState } from "react";

const BlogDetails = () => {
    const { id } = useParams();
    const history=useHistory();
    
    const [title,setTitle]=useState('');
    const [body,setBody]=useState('');

    const [Author,setAuthor]=useState('NaN');
    const apiUrl = `http://localhost:8000/person/${id}`; // Correctly construct the URL
    
    const handleEdit=(e)=>{
        e.preventDefault();
        const blog={title,body,Author};
        
   

        fetch("http://localhost:8000/person",{
            method:"POST",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(blog)


        }).then(()=>{

            console.log("New blog is add ")

           // history.go(-1);
           history.push('/');

        });
    }




    const { data, errors, pending } = useFetch(apiUrl); // Renamed 'errors' to 'errors'
    const [edite,setEdite]=useState(false)

    const handleDelete=()=>{
        fetch(apiUrl,{
            method:"DELETE"
        }).then(()=>{
            history.push('/');
        })
    }

    return ( 
        <div className="BlogDetails">
            <h3>This is the blog id {id}</h3>
            {errors && <h1>Error: {errors.message}</h1>} {/* Display the errors message */}
            {pending && <h2>Loading...</h2>}
            {data && (
                <article>
                    <p>Written by {data.body }</p> 
                </article>
            )}
            <button onClick={handleDelete}>delete</button>
            <button onClick={()=>{setEdite(true);setTitle(data.title);
        setBody(data.body);
        setAuthor(data.Author);}}>Edite</button>
            {edite &&  <form onSubmit={handleEdit}>
            <label>title</label>
            <input 
            type="text"
            required
            value={title}
            onChange={(e)=>setTitle(e.target.value)}  /><br/><br/>
            <label>body area</label>
            <textarea 
                type="text"
                required
                value={body}
                onChange={(e)=>setBody(e.target.value)} /><br/><br/>

            <label>Chose the Author</label>
            <select 
              value={Author}
              onChange={(e)=>setAuthor(e.target.value)}>
                  <option value="Muhibullah ">Muhibullah</option>
              <   option value="Haji Ahmad ">Haji Ahmad</option>

              </select><br/><br/>
              {!pending &&<button type="submit">add blog</button>}
              {pending &&<button type="submit">add...</button>}



        
        </form>}

        </div>
     );
}

export default BlogDetails;
