import "../styles/Card.css";
import CardBackImage from "../assets/jpg/card-back.jpg";

const Card = ({ pokemon }) => {
    return (
        <div className="card">
            <div className="img-wrapper">
                <img src={pokemon ? pokemon.url : CardBackImage} alt="pokemon image" />
            </div>
            <div className="name">{pokemon ? pokemon.name : ""}</div>
        </div>
    );
};

export default Card;