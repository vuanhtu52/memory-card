import "./App.css";
import Card from "./components/Card";
import NavBar from "./components/NavBar";
import PokeBallIcon from "./assets/svg/pokeball.svg";
import { useState, useEffect } from "react";

function App() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=1000")
      .then(response => {
        return response.json();
      })
      .then(response => {
        console.log(response.results)
        const newPokemons = [];
        for (let pokemon of response.results) {
          newPokemons.push(pokemon);
        }
        setPokemons(newPokemons);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <>
      <NavBar />

      <div className="cards-wrapper">
        <Card image={PokeBallIcon} text="pokeball" />
      </div>
    </>
  )
}

export default App
