import { useState } from "react";



function GameBoard({onSelectSequare,board}){

    

    // const [gameBoard,setGameboard] = useState(initialGameBoard);
    // function handleSelectSquare(rowIndex,colIndex){
    //         setGameboard((prevGameBoard) => {
    //             const updateBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
    //             updateBoard[rowIndex][colIndex] = activePlayerSymbol;
    //             return updateBoard;
    //         });
    //         onSelectSequare();
    // }
        return(
            <ol id="game-board">
                {board.map((row,rowIndex) => <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol,colIndex) => (
                            <li key={colIndex}>
                                <button onClick={() => onSelectSequare(rowIndex,colIndex)} disabled={playerSymbol !== null}>
                                    {playerSymbol}
                                </button>
                            </li>
                        ))}
                    </ol>
                </li>)}
            </ol>
        );
}
export default GameBoard;