import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Create = () => {
    const [title,setTitle]=useState('');
    const [body,setBody]=useState('');
    const [Author,setAuthor]=useState('NaN');
    const [pending,setPending]=useState(false);
    const history=useHistory();
    const handlesubmit=(e)=>{
        e.preventDefault();
        const blog={title,body,Author};
        setPending(true);

        fetch("http://localhost:8000/person",{
            method:"POST",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(blog)


        }).then(()=>{
            setPending(false);

            console.log("New blog is add ")

           // history.go(-1);
           history.push('/');

        });
    }
    return (  
       <div className="Creater">
        <form onSubmit={handlesubmit}>
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



        
        </form>
        <h1>{title}</h1>
        <h1>{body}</h1>
        <h1>{Author}</h1>


       </div>
    );
}
 
export default Create;