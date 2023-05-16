
// https://swapi.py4e.com/
// `https://swapi.dev/api/people/

import React, { useState, useEffect } from 'react';
import Character from './components/Character';
import axios from 'axios';


function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
      .get('https://swapi.dev/api/people/')
      .then(res => {
        console.log('dataCheck', res.data);
        const characterNames = res.data.map(character => character.name);
        setCharacters(characterNames);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  console.log('characterCheck', characters);

  return (
    <div className="App">
      {characters.map((name, idx) => (
        <h1 className="Header" key={idx}>
          <Character name={name} />
        </h1>
      ))}
    </div>
  );
}

export default App;




 // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.