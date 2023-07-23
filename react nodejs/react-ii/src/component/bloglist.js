import { useState } from "react";

const Bloglist = (props) => {
    const { blogs,handleDelete} = props; // Corrected the prop name to 'blogs'


    return (
        <div className="block-list">
            {blogs.map((blogItem) => (
                <div className="preview" key={blogItem.id}>

                    <h1>{blogItem.title}</h1>
                    <h2>{blogItem.tools}</h2>
                    <button onClick={()=> handleDelete(blogItem.id)}>Delete</button>
                </div>
            ))}
        </div>
    );
}

export default Bloglist;
