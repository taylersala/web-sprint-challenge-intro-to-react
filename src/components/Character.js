// Write your Character component here
import React, { useState, useEffect } from "react";



function Character({ name, birth_year }) {
const [name, setName] = useState;
const fetchName = (id) => {
    fetch(`https://swapi.dev/api/people/${id}`)
    .then(res => res.json())
    console.log(res.data); 
    return (
        <div className="user">
            <div>{name}</div>
        </div>
    )
}
}


// https://swapi.dev/api/people/