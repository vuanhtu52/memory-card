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
                <img src={pokemon.url !== "" ? pokemon.url : CardBackImage} alt="pokemon image" />
            </div>
            <div className="name">{pokemon.name !== "" ? pokemon.name : ""}</div>
        </div>
    );
};

const isInteger = (props, propName, componentName) => {
    if (!Number.isInteger(props[propName])) {
        return new Error(`${componentName}: ${propName}  must be integer`);
    }
};

Card.propTypes = {
    pokemon: PropTypes.shape({
        name: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
    }).isRequired,
    updateSelectedPokemons: PropTypes.func.isRequired,
    pickedPokemons: PropTypes.array.isRequired,
    setPickedPokemons: PropTypes.func.isRequired,
    score: isInteger,
    setScore: PropTypes.func.isRequired,
    highScore: isInteger,
    setHighScore: PropTypes.func.isRequired,
    setGameOver: PropTypes.func.isRequired,
};

export default Card;