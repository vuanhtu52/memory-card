import "./App.css";
import Card from "./components/Card";
import NavBar from "./components/NavBar";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const cardsCount = 12;
  const [pokemons, setPokemons] = useState([]);
  const [selectedPokemons, setSelectedPokemons] = useState(Array(cardsCount).fill(0));

  const cardIds = [];
  for (let i = 0; i < cardsCount; i++) {
    cardIds.push(uuidv4());
  }

  const selectRandomPokemons = pokemonsList => {
    const randomIndices = generateRandomIntegers(0, pokemonsList.length - 1, cardsCount);
    const result = [];
    for (let i of randomIndices) {
      result.push(pokemonsList[i]);
    }
    return result;
  };

  const updateSelectedPokemons = () => {
    setSelectedPokemons(selectRandomPokemons(pokemons));
  };

  const generateRandomIntegers = (min, max, n) => {
    if (max <= min) {
      return Array(n).fill(0);
    }

    let nums = [];
    for (let i = min; i <= max; i++) {
      nums.push(i);
    }
    nums.sort(() => Math.random() - 0.5);

    if (n < nums.length) {
      nums = nums.slice(0, n)
    }

    return nums;
  };

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
        setSelectedPokemons(selectRandomPokemons(newPokemons));
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <>
      <div className="overlay"></div>
      <NavBar />

      <section className="main">
        <div className="cards-wrapper">
          {
            selectedPokemons.map((pokemon, index) => <Card key={cardIds[index]} pokemon={pokemon} updateSelectedPokemons={updateSelectedPokemons} />)
          }
        </div>

        <button className="restart-button">Restart</button>
      </section>
    </>
  )
}

export default App
