import React, { useState, useEffect } from 'react';
import axios from './axios';
import getOHLC from './getOHLC'


function Leftbar({ title , fetchUrl, isLargeRow}) {
    const [coins, setCoins] = useState([]);
    const [coinOHLC, setCoinOHLC] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            console.log(request);
            setCoins(request.data);
            return request;
        }
        fetchData();

    },[fetchUrl]);

    function handleClick(coin){
        console.log("loading " + coin.id)
    };

    return ( 
        <div className="col1">
            <h2>{title}</h2>
            <div className="col1__info">
                {coins.map((coin) => (
                    <div key={coin.id} 
                        onClick={() => {handleClick(coin)}}
                        className={`col1__info ${isLargeRow && "col1__infoLarge"}`}>
                        Symbol: {coin.symbol } ; Name:{coin.name} 
                     </div> 
                ))}
            </div>
        </div>
     );
}
 
export default Leftbar;
