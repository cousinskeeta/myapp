const Subscribe = () => {

    const handleClick = (e) => {
        console.log('thx 4 subscibing!', e);
      }

    return (  
        <button onClick={handleClick} className="buttons">
            Subscribe
        </button>
    );
}
 
export default Subscribe;