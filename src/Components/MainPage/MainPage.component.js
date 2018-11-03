import React from 'react';

import Board from '../Board/Board.component';
import './MainPage.scss';


const MainPage = ({board, flagsLeft, onNewGame, width, onWidthChange, height, onHeightChange, mines, onMinesChange, onTileClick, isSuperman, onModeChange}) => {
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
                    {renderTextArea('Width', onWidthChange, width)}
                    {renderTextArea('Height', onHeightChange, height)}
                    {renderTextArea('Mines', onMinesChange, mines)}
                </div>
                <div>
                    Superman Mode:  <input type="checkbox" checked={isSuperman} onChange={onModeChange}/>
                </div>
                <div className='new-game'>
                    <input type="button"
                           className="new-game-btn"
                           value="New Game"
                           onClick={onNewGame}
                    />
                </div>
            </div>
            <div className='flags-left'>
                Flags left: {flagsLeft}
            </div>
            <div>
                <Board board={board}
                       onTileClick={onTileClick}
                       isSuperman={isSuperman}
                />
            </div>
        </div>
    )
}

export default MainPage;