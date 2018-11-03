import React from 'react';

import dangerFlag from "../../../Resources/danger-flag.png";
import bomb from "../../../Resources/bomb.jpg";
import './Tile.scss';


const Tile = ({i, j, isVisiable, isFlagged, isMine, numOfMines, onClick, isSuperman}) => {
    return (
        <button className={`tile ${isVisiable ? 'clicked' : ''}`}
                disabled={isVisiable}
                onClick={onClick}>
            {
                isFlagged ? (
                    <img src={dangerFlag} alt='F'/>
                ) : (
                    (isSuperman && isMine) ? '*' :
                        !isVisiable ? ''
                            : (
                                isMine ? (
                                    <img src={bomb} alt='*'/>
                                ) : (
                                    numOfMines === 0 ? '' : numOfMines
                                )
                            )
                )
            }
        </button>
    )
}

export default Tile;