const Claim = () => {
    const handleClickAgain = (name, e) => {
        console.log('Claimed! Thank you, ' + name, e.target);
      }

    return ( 
        <button onClick={(e)=> handleClickAgain('Username', e)} className="buttons">
            Claim
        </button>
     );
}
 
export default Claim;