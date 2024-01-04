import "../styles/GameOverDialog.css";

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

export default GameOverDialog;