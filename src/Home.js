import { useState } from "react";
import BlogList from "./BlogList";
const Home = ()=>
{
  const [blogs, setBlogs] = useState([
    {title: 'My new website', body:'lorem dummy data',author:'gideon', id:1},
    {title: 'My new website2', body:'lorem dummy data', author:'alita',id:2},
    {title: 'My new website3', body:'lorem dummy data',author:'doreen', id:3}
  ])

  return(
    
    <>
    <div className="home">
        <h2>Homepage</h2>
        <BlogList props={blogs}/>
        
    </div>
    </>
  );
}

export default Home;