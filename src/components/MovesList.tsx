import React from "react";
import { useState } from "react";
import { Squares } from "./Game";

export default function MovesList( {moves}: {moves:React.JSX.Element[]} ) {
    const [ascending, setAscending] = useState(true);
    
    function handleReverseOrder() {
        setAscending(!ascending);
    }

    const displayMoves = ascending ? moves : [...moves].reverse();

    return(
        <>
            <button onClick={handleReverseOrder}>Reverse Order</button>
            <ol id="movesList">{displayMoves}</ol>
        </>
    );
}