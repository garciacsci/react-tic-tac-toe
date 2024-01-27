import Square from "./Square";
import Status from "./Status";
import { calculateWinner } from "../utils/gameUtils";

export default function Board({ xTurn, currentMove, onPlay}) {

    const { squares, row, col } = currentMove;


    function handleClick(i) {
        // Return early if square is filled or winner is decided
        if (squares[i] || calculateWinner(squares)) return;


        const nextSquares = squares.slice();
        
        xTurn ? nextSquares[i] = 'X': nextSquares[i] = 'O';
        onPlay(nextSquares, i);
    }


    const winningSquares = calculateWinner(squares);
    const winner = winningSquares && squares[winningSquares[0]];
    let status;



    let rows = [];
    for (let i = 0; i < 3; i++) {
        let cells = [];
        for (let j = 0; j< 3; j++) {
            let id = i * 3 + j;
            cells.push(
                <Square 
                    key={id} 
                    value={squares[id]} 
                    onSquareClick={() => handleClick(id)}
                    winningSquare={winningSquares && winningSquares.includes(id)}
                />
            )
        }
        rows.push(
            <div 
                key={i} 
                className="board-row"
            >
                {cells}
            </div>
        );
    }

    if(winner) { // If someone wins
        status = `Winner: ${winner}`;
    } else if (squares.every(square => square)) { // if every square is filled
        status = 'Draw!'
    } else { // If game is not done
        status = `${xTurn ? 'X' : 'O'}'s Turn`
    }

    return (
        <>
        <Status status={status}/>
        {rows}
        </>
    );
}