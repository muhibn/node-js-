const Home = () => {

    const handleclick= (e)=>{

        console.log("Hello world ",e);
    }
    const  handleclickagain=(name)=>{
        console.log("Hello Mr : ",name)
    }
    return (  
        <div className="home">
            <h1 style={{backgroundColor:"yellow"}}>sThis home page </h1>
        <button onClick={handleclick}>click</button>
        <button onClick={()=>{handleclickagain("Muhibullah Noorzad ")}}>click again </button>
        </div>
    );
}
 
export default Home;