import React from "react";
import {useState} from "react";
import Board from "./Board";
import MovesList from "./MovesList";

export type PlayerMark = 'X' | 'O' | null;

export interface Squares {
    squares: PlayerMark[];
    row: number | undefined;
    col: number | undefined;
}


export default function Game() {
    const [history, setHistory] = useState<Squares[]>([{ squares: Array(9).fill(null), row: undefined, col: undefined }]);
    const [currentMove, setCurrentMove] = useState<number>(0);
    const xTurn:boolean = currentMove % 2 === 0;
    const currentSquares:Squares = history[currentMove];

    function handlePlay(nextSquares: PlayerMark[], i: number) {
        const row = Math.floor(i / 3) + 1;
        const col = i % 3 + 1;

        const nextHistory = [...history.slice(0, currentMove +1), {squares: nextSquares, row:row, col:col}];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
    }

    function jumpTo(nextMove: number) {
        setCurrentMove(nextMove);
    } 

    const moves: React.JSX.Element[] = history.map( (squares, move) => {
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

