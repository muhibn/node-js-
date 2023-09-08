import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const useFetch=(url)=>{
    const [data,setData]=useState(null);
    const [pending,setPending]=useState(true);
    const [errors,setError]=useState(null);
    const history=useHistory
    
   
        useEffect(()=>{
            setTimeout(()=>{
            fetch(url).then(res=>{
                if(!res.ok){
                    throw Error("The file does not found ");
                }
                return res.json()
            }).then(data=>{
                setData(data);
                setError(null);
                setPending(false);
                console.log(data)
    
            }).catch(err=>{
                const errms=err.message;
                setData(errms);
                setPending(false);
    
            })
        },1000)
        },[url]);

    return {data,errors,pending};
}
export  default useFetch;