  import React from 'react';
  import { useState,useEffect} from 'react';
  import axios from 'axios'


  function App() {
    const [data,setData]=useState()
    const url='https://americas.api.riotgames.com/riot/account/v1/accounts/by-riot-id/pabloleec/RMC?api_key=RGAPI-3ce055d3-35c7-43c0-bdcb-882f165c9589';

    useEffect(()=>{
      axios.get(url)
      .then(response => {
        console.log(response.data); 
        setData(response.data);
      })
      .catch(error => {
        console.error('Error :', error); 
      });

    },[])
    
    
    

    return (
      <div>
        <h1>funciona?w</h1>
        {data}
  
      </div>
    );
  }

  export default App;

