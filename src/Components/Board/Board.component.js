import React from 'react';

import Tile from './Tile/Tile.component';
import './Board.scss';


const Board = ({board, onTileClick}) => {
    const renderTableBody = () => {
        return (
            <React.Fragments>
            {
                board.map((row, index) => renderTableRow(row, index))
            }
            </React.Fragments>
        );
    };

    const renderTableRow = (row, rowIndex) => {
        return (
            <div key={`row#${rowIndex}`} className='row'>
                {
                    row.map((tile, colIndex) => {
                        return (
                                <Tile i={tile.i}
                                      j={tile.j}
                                      onClick={(e)=>onTileClick(tile.i, tile.j, e)}
                                      isVisiable={tile.isVisiable}
                                      isFlagged={tile.isFlagged}
                                      isMine={tile.isMine}
                                      numOfMines={tile.numOfMines}
                                      key={`tile#r${rowIndex}c${colIndex}`}
                                />
                        )
                    })
                }
            </div>
        )
    };



    return (
        <div className='gameboard-container'>
            <div className='gameboard'>
                {board.map((row, index) => renderTableRow(row, index))}
            </div>
        </div>
    )
}

export default Board;