import React, { ReactElement } from "react";
import { useState } from "react";

export default function MovesList( {moves}: {moves:ReactElement[]} ) {
    const [ascending, setAscending] = useState(true);
    
    function handleReverseOrder() {
        setAscending(!ascending);
    }

    const displayMoves = ascending ? moves : [...moves].reverse();

    return(
        <>
            {moves.length > 1 ? 
                (
                    <button onClick={handleReverseOrder}>Reverse Order</button>
                ):
            (
                <button className = "invisible" onClick={undefined}>Reverse Order</button>
            )}
            <ol id="movesList">{displayMoves}</ol>
        </>
    );
}