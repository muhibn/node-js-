import { useState, useEffect } from "react";
const useFetch=(url)=>{
    const [data,setBlog]=useState(null);
    const [pending,setPending]=useState(true);
    const [Errors,setError]=useState(null)


    useEffect(()=>{
        setTimeout(()=>{
            fetch(url).then(res =>{

            if(!res.ok){
                throw Error("the data source doesn't exist ")
            }

            return res.json(); 

        }).then(data=>{
            console.log(data);
            setBlog(data)
            setPending(false)
            setError(null);
        }).catch((err)=>{
            setError(err.message);
            setPending(false);
            console.log(err.message);
        });
    },1000)




    },[]);


    return {data,pending,Errors};


}
export default useFetch;