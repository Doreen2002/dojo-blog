import React from "react";

const BlogList =(props)=>

{
    const blogs = props.props;
    return(
        <div>
        {blogs.map((item)=>
        <div key={item.id}><h1>{item.title} written by {item.author}</h1><span>{item.body}</span></div>
          
        )}
        </div>
    )
}


export default BlogList;