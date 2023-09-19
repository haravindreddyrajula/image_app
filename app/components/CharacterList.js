// app/components/CharacterList.js
import React, { useState, useEffect } from "react";

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    // Fetching the data from the Rick and Morty API
    fetch("https://rickandmortyapi.com/api/character/")
      .then((response) => response.json())
      .then((data) => {
        // Extracting the 'results' array containing character information
        const characterData = data.results;
        setCharacters(characterData);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <ul>
        {characters.map((character) => (
          <li key={character.id}>
            <h3>{character.name}</h3>
            <img src={character.image} alt={character.name} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CharacterList;
