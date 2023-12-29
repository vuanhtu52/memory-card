import "../styles/NavBar.css";
import PokeballIcon from "../assets/svg/pokeball.svg";

const NavBar = () => {
    return (
        <div className="navbar">
            <header>
                <img src={PokeballIcon} alt="pokeball logo" />
                <div>Pokemon Cards</div>
            </header>

            <div className="score-board">
                <div>Current score: 0</div>
                <div>High score: 0</div>
            </div>
        </div>
    )
};

export default NavBar;