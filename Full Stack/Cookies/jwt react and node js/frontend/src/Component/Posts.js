import Axios from "axios";

export default function Posts(){

    const posthandler=async (e)=>{
        e.preventDefault();
        let token="Bearer"+this.state.store.token;

        let config={
            Headers:{
                Authorization:token
            }
        }
        try{
             await Axios.post("http://localhost:3000/api/posts",{

                post:this.state.post
            },config)
            .then(response=>{

                console.log(response);
            }
            )
        }catch(err) {

            console.log(err);

            
        }
       
  
    }

  return (
    <div className="Posts" onLoad={posthandler}>
     Hello every one 
    </div>
  );
}
