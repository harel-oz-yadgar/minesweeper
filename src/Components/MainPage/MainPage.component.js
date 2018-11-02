import React from 'react';

import Board from '../Board/Board.component';
import './MainPage.scss';


const MainPage = ({board, onNewGame, width, onWidthChange, height, onHeightChange, mines, onMinesChange, onTileClick}) => {
    const renderTextArea = (text, onChange, value) => {
        return (
            <div className='option'>
                <span className='text'>{text}:</span>
                <input type="text"
                       className='input'
                       name={text}
                       value={value}
                       onChange={val => onChange(val.target.value)}
                />
            </div>
        )
    }


    return (
        <div>
            <div className='command-panel'>
                <div className='game-options'>
                    {renderTextArea('width', onWidthChange, width)}
                    {renderTextArea('height', onHeightChange, height)}
                    {renderTextArea('mines', onMinesChange, mines)}
                </div>
                <div className='new-game'>
                    <input type="button"
                           className="new-game-btn"
                           value="New Game"
                           onClick={onNewGame}
                    />
                </div>
            </div>
            <div>
                <Board board={board}
                       onTileClick={onTileClick}
                />
            </div>
        </div>
    )
}

export default MainPage;