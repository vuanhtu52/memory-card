import "../styles/Card.css";
import CardBackImage from "../assets/jpg/card-back.jpg";
import PropTypes from "prop-types";

const Card = (
    {
        pokemon,
        updateSelectedPokemons,
        pickedPokemons,
        setPickedPokemons,
        score,
        setScore,
        highScore,
        setHighScore,
        gameOver,
        setGameOver
    }
) => {
    const handleClickCard = () => {
        if (pickedPokemons.includes(pokemon.name)) {
            setGameOver(true);
        } else {
            setPickedPokemons([...pickedPokemons, pokemon.name]);
            if (score === highScore) {
                setHighScore(highScore + 1);
            }
            setScore(score + 1);
        }
        updateSelectedPokemons();
    };

    return (
        <div className="card">
            <div className="img-wrapper" onClick={handleClickCard}>
                <img src={pokemon ? pokemon.url : CardBackImage} alt="pokemon image" />
            </div>
            <div className="name">{pokemon ? pokemon.name : ""}</div>
        </div>
    );
};

Card.propTypes = {

};

export default Card;