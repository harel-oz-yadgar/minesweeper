import React from 'react';

const Board = ({board, onTileClick}) => {

    console.log("look at me" , board)

    const renderTableBody = () => {
        return (
            <tbody>
            {
                board.map((row, index) => renderTableRow(row, index))
            }
            </tbody>
        );
    };

    const renderTableRow = (row, rowIndex) => {
        return (
            <tr key={`row#${rowIndex}`}>
                {
                    row.map((tile, colIndex) => {
                        return (
                            <td key={`tile#r${rowIndex}c${colIndex}`}>
                                {renderTile(tile)}
                            </td>
                        )
                    })
                }
            </tr>
        )
    };

    const renderTile = (tile, onTileClick) => {
        return (
            <div>
                tile
            </div>
        )
    }

    return (
        <div>
            <table>
                {renderTableBody()}
            </table>
        </div>
    )
}

export default Board;