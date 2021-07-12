import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Leftbar from './Leftbar';
import Centerbar from './components/Centerbar';
import Rightbar from './components/Rightbar';
import requests from './requests';

function App() {
  return (

    <div className="App">
      < Navbar />
      <div className="content">
        <div className="container one">
          < Leftbar title="CRYPTO LIST" 
        fetchUrl={requests.fetchCoinList} 
        isLargeRow  />
        </div>
        <div className="container two">
          < Centerbar />
        </div>
        <div className="container three">
          < Rightbar />
        </div>
      </div>
    </div>
  );
};

export default App;
