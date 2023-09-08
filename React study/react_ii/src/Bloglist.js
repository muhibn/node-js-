const Bloglist = ({blog}) => {
    return ( 
        <div className="Bloglist">
           
           
           
           
            {blog.map((blog)=>(
                <div className="Blog" key={blog.id}>
                    <h1>{blog.name}</h1>
                    <h2>{blog.title}</h2>

                </div>
                
            
            ))};
            
        </div>
     );
}
 
export default Bloglist;