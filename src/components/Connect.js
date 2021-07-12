const Connect = () => {

    const handleClick = (address, e) => {
        console.log('Connected!!'+ address, e.target);
      }

    return ( 
        <button onClick={(e) => handleClick('0x77f56976g75e56d74e',e)} className="buttons">
            Connect
        </button>
     );
}
 
export default Connect;
<div>
    Connect
</div>