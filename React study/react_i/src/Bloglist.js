const Bloglist = (props) => {

    const blog=props.blogs;
    const title=props.title;
    const handleDelete=props.handleDelete;

    return ( 
        <div className="BlL">
            <h1>{title}</h1>
        {blog.map((blog)=>(

            <div className="blo" key={blog.id} style={{backgroundColor:"lightblue"}}>
                <h1>title :{blog.title}</h1>
                <h3>author:{blog.author}</h3>
                <button onClick={()=>handleDelete(blog.id)}>Delete Blog</button>
            </div>

         ))};

</div>

     );
}
 
export default Bloglist;