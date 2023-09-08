import Bloglist from "./bloglist";
import useFetch from "./useFetch";
const Home = () => {
    const {data,Errors,pending}=useFetch("http://localhost:8000/person");
    return (

       <div className="Home">
        <h1>Hello world this home page </h1>
        {Errors && <h1>{Errors}</h1>}
        {pending && <h1>{pending}</h1>}
        {data && <Bloglist blogs={data}></Bloglist>}

       </div>
      );
}
 
export default Home; 
<h1>Home page </h1>