import "../styles/NavBar.css";
import PokeballIcon from "../assets/svg/pokeball.svg";

const NavBar = ({score, highScore}) => {
    return (
        <div className="navbar">
            <header>
                <img src={PokeballIcon} alt="pokeball logo" />
                <div>Pokemon Cards</div>
            </header>

            <div className="score-board">
                <div className="score">
                    <div>Current score:</div>
                    <div>{score}</div>
                </div>
                <div className="high-score">
                    <div>High score:</div>
                    <div>{highScore}</div>
                </div>
            </div>
        </div>
    )
};

export default NavBar;