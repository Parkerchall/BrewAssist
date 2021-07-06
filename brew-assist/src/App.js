import React, { useState } from 'react';

import './App.css';
import PotionList from './components/PotionList';
import SearchBar from './components/SearchBar';
import PotionSource from './API/PotionSource';

function App() {
  const [state, setState] = useState({
    results: []
  }
  )
  const onSearch = async (text) => {
      const results = await PotionSource.get("/", {params: {s: text, i: "appS2k6dz8DZrNMkH", apiKey: "keyXSH2IAWnLTqX3s"}})
      setState(prevState => {
        return {...prevState, results:results}
      })
    }
  //https://api.airtable.com/v0/appS2k6dz8DZrNMkH/potions?api_key=keyXSH2IAWnLTqX3s
  return (
   <div className="App">
     <div className="container searchApp">
       <h2 classname="title is-2 has-text-centered">
         Search for a Potion
       </h2>
       <SearchBar onSearch={onSearch}/>
       <PotionList results={state.results}/>

     </div>
   </div>
  );
}

export default App;
