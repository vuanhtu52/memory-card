import "../styles/GameOverDialog.css";
import PropTypes from "prop-types";

const GameOverDialog = ({score, handleClickRestart}) => {
    return (
        <div className="dialog">
            <div className="overlay">
                <div className="dialog-box">
                    <div>Game Over</div>
                    <div>Your score: {score}</div>
                    <button className="restart-button" onClick={handleClickRestart}>Restart</button>
                </div>
            </div>
        </div>
    );
};

const isInteger = (props, propName, componentName) => {
    if (!Number.isInteger(props[propName])) {
        return new Error(`${componentName}: ${propName}  must be integer`);
    }
};

GameOverDialog.propTypes = {
    score: isInteger,
    handleClickRestart: PropTypes.func.isRequired,
};

export default GameOverDialog;