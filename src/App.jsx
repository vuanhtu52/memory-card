import "./App.css";
import Card from "./components/Card";
import NavBar from "./components/NavBar";
import PokeBallIcon from "./assets/svg/pokeball.svg";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const cardsCount = 12;
  const cardIds = [];
  for (let i = 0; i < cardsCount; i++) {
    cardIds.push(uuidv4());
  }

  const selectRandomPokemons = pokemonsList => {
    const randomIndices = generateRandomIntegersInRange(0, pokemonsList.length - 1, cardsCount);
    const result = [];
    for (let i of randomIndices) {
      result.push(pokemonsList[i]);
    }
    return result;
  };

  const generateRandomIntegersInRange = (min, max, n) => {
    const randomIntegers = [];
    for (let i = 0; i < n; i++) {
      const randomInteger = Math.floor(Math.random() * (max - min + 1)) + min;
      randomIntegers.push(randomInteger);
    }
    return randomIntegers.sort();
  }

  // Fetch all pokemons
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=100")
      .then(response => {
        return response.json();
      })
      .then(response => {
        const newPokemons = response.results;
        const imagePromises = newPokemons.map(pokemon => fetch(pokemon.url).then(response => response.json()));
        return Promise.all(imagePromises);
      })
      .then(responses => {
        const newPokemons = [];
        responses.forEach(response => {
          newPokemons.push({
            name: response.name,
            url: response.sprites.front_default
          });
        });
        setPokemons(newPokemons);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <>
      <NavBar />

      <div className="cards-wrapper">
        {
          selectRandomPokemons(pokemons).map((pokemon, index) => <Card key={cardIds[index]} pokemon={pokemon} />)
        }
      </div>
    </>
  )
}

export default App
