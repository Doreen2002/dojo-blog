import { useState } from "react";
const Home = ()=>
{
  const [name, setName] = useState('mario'); 
  const [age, setAge] = useState(25); 
    const handleClick = (e) =>
    {
        console.log('hello', 'ninjas', e.target);
    }

    const handleClickAgain = (name)=>
    {
        console.log('helle' + name)
        setName('Mwape')
        setAge(20)
    }

  return(
    
    <>
    <div className="home">
        <h2>Homepage</h2>
        <p>{name} is {age}</p>
        <button onClick={handleClick}>Click Me</button>
        <button onClick={()=>handleClickAgain('doreen')}>Click Me Again</button>
    </div>
    </>
  );
}

export default Home;