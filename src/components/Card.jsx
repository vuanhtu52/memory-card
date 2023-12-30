import "../styles/Card.css";

const Card = ({image, text}) => {
    return (
        <div className="card">
            <img src={image} alt="card image" />
            <p>{text}</p>
        </div>
    );
};

export default Card;