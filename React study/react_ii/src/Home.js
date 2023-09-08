import { useEffect, useState } from "react";
import Bloglist from "./Bloglist";
import useFetch from "./useFetch";
const Home = () => {
  const     {pending,Errors,data}=useFetch('http://localhost:8000/parson');
   

    return (
        <div className="Home">
            <h1>home page </h1>
            {Errors && <p>{Errors}</p>}
            {pending &&<p>loading...</p>}
            {data && <Bloglist blog={data}></Bloglist>}

        </div>

     );
}
 
export default Home;