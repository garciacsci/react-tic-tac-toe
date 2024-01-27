import {useState} from "react";
import Board from "./Board";
import MovesList from "./MovesList";

export default function Game() {
    const [history, setHistory] = useState([{ squares: Array(9).fill(null), row: null, col: null }]);
    const [currentMove, setCurrentMove] = useState(0);
    const xTurn = currentMove % 2 === 0;
    const currentSquares = history[currentMove];

    function handlePlay(nextSquares, i) {
        const row = Math.floor(i / 3) + 1;
        const col = i % 3 + 1;

        const nextHistory = [...history.slice(0, currentMove +1), {squares: nextSquares, row:row, col:col}];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
    }

    function jumpTo(nextMove) {
        setCurrentMove(nextMove);
    } 

    const moves = history.map( (squares, move) => {
        let description;

        if (move == currentMove) {

        return (
            <button 
            key = {move}
            className = "current-move"
            >
                {`You are at move #${move+1}`}
            </button>
        );

        }

        move ? description = 
        `Go to move #${move+1} (${squares.row}, ${squares.col})` : description = `Go to game start`;

        return (
        <li key={move}>
            <button onClick={() => jumpTo(move)}>{description}</button>
        </li>
        );
    });

    return (
        <div className="game">
        <div className="game-board">
            <Board xTurn={xTurn} currentMove={currentSquares} onPlay={handlePlay} />
        </div>
        {currentMove > 0 && (<div className="game-info">
            <div className="history">
            <MovesList moves={moves} />
            </div>
        </div>)}
        </div>
    );
}

