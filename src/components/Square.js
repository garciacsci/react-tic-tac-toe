export default function Square({ value, onSquareClick, winningSquare }) {
    return (
    <button 
        className={winningSquare ? "winning-square" : "square"}
        onClick={onSquareClick}
    >
        {value}
    </button>);
}