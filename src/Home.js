const Home = ()=>
{
    const handleClick = (e) =>
    {
        console.log('hello', 'ninjas', e.target);
    }

    const handleClickAgain = (name)=>
    {
        console.log('helle' + name)
    }

  return(
    
    <>
    <div className="home">
        <h2>Homepage</h2>
        <button onClick={handleClick}>Click Me</button>
        <button onClick={()=>handleClickAgain('doreen')}>Click Me Again</button>
    </div>
    </>
  );
}

export default Home;