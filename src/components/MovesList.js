import { useState } from "react";

export default function MovesList( {moves} ) {
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