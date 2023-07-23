import { useState } from "react";

const Home = () => {
    const without_arg=(e)=>{
        console.log("Hello world ");
       // console.log(e)
    }
    const funct_arg=(name)=>{

        console.log("Hello Mr ",name)

    }

    

    let  [quantity,setQuantite]=useState(0);
    
    let i=quantity;

    const addition=()=>{
        setQuantite(++i);

    }
    const reduce=()=>{
        setQuantite(--i);
    }

    return ( 
        <div className="home">
          <h1 style={{color:"blue",
            background_color:"green", 
        }
            }>This home page of mey web side </h1>
            <div style={{background:"green"}}>
            
            <button onClick={reduce}>-</button>
            <a >{quantity}</a>
            <button onClick={addition}>+</button>
            </div>


            {/*

            <button onClick={without_arg}>Functioin without argoment </button>

            <button onClick={()=>funct_arg("Muhibullah Noorzad")}>functioin with argoment</button>
        */}
        </div>

     );
}
 
export default Home;