import React, { useState, useEffect } from 'react';
import Character from './components/Character';

function App() {
  const [characters, setCharacters] = useState([]);

    useEffect(() => {
        fetch(`https://swapi.dev/api/people/`)
        .then(res => {
            res.json();
            console.log(res.data);
        }).then(data => {
            setCharacters(data.results)
        }).catch(err => console.error(err));
        
    }, []);
    return ( <div className="App"> 
        {characters && characters.map((character) => {
            return <h1 className="Header"><Character key={character.idx} name={character.name} /></h1>
        })}
    </div>
    );
   

}

export default App;


 // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.