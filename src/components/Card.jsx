import "../styles/Card.css";
import CardBackImage from "../assets/jpg/card-back.jpg";
import { useState, useEffect } from "react";

const Card = ({ pokemon }) => {
    return (
        <div className="card">
            <img src={pokemon ? pokemon.url : CardBackImage} alt="pokemon image" />
            <div>{pokemon ? pokemon.name : ""}</div>
        </div>
    );
};

export default Card;