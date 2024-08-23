import React from "react";
import { PlayerMark } from "./Game";

interface SquareProps {
    value: PlayerMark;
    onSquareClick: () => void;
    winningSquare: boolean;
}

export default function Square({ value, onSquareClick, winningSquare }: SquareProps) {
    return (
    <button 
        className={winningSquare ? "winning-square" : "square"}
        onClick={onSquareClick}
    >
        {value}
    </button>);
}