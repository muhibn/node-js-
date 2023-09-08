
import { useState } from "react";

const Hook = () => {
    const [name,setName]=useState("Muhibullah ");
    const [age,setAge]=useState(26);
    const  clickchange=()=>{
        setName("Ezatullah");
        setAge("24");
    }
    return ( 
        <div className="Hook" style={{textAlign:"center"}}>
            <hr></hr>
         <h1>Hook data </h1>

         <h1>{name}</h1>
         <h1>{age}</h1>
         <button onClick={clickchange}>clickme</button>
         
        </div>
     );
}
 
export default Hook;