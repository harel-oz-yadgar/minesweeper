import React from 'react';

import dangerFlag from "../../../Resources/danger-flag.png";
import bomb from "../../../Resources/bomb.jpg";


const Tile = ({i, j, isVisiable, isFlagged, isMine, numOfMines, onClick}) => {
    return (
        <button className={`tile ${isVisiable ? 'clicked' : ''}`}
                disabled={isVisiable}
                onClick={onClick}>
            {
                !isVisiable ? '' :
                    isFlagged ? (
                        <img src={dangerFlag} alt='F'/>
                    ) : (
                        isMine ? (
                            <img src={bomb} alt='*'/>
                        ) : (
                            numOfMines === 0 ? '' : numOfMines
                        )
                    )
            }
        </button>
    )
}

export default Tile;