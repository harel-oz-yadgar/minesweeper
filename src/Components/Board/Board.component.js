import React from 'react';

import dangerFlag from '../../Resources/danger-flag.png';
import bomb from '../../Resources/bomb.jpg';
import './Board.scss'


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
        console.log(tile)
        return (
            <button className='tile'>
                {
                    !tile.isVisiable ? '' :
                        tile.isFlagged ? (
                            <img src={dangerFlag} alt='F' />
                        ) : (
                            tile.isMine ? (
                                <img src={bomb} alt='*' />
                            ) : (
                                tile.numOfMines===0 ? '' : tile.numOfMines
                            )
                        )
                }
            </button>
        )
    }

    return (
        <div>
            <table className='table'>
                {renderTableBody()}
            </table>
        </div>
    )
}

export default Board;