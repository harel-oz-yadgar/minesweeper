import React from 'react';

const MainPage = ({onNewGame, width, onWidthChange, height, onHeightChange, mines, onMinesChange}) => {
    const renderTextArea = (text, onChange, value) => {
        return (
            <div>
                {text}
                <input type="text"
                       name={text}
                       value={value}
                       onChange={val => onChange(val.target.value)}
                />
            </div>
        )
    }


    return (
        <div>
            <div>
                <div>
                    {renderTextArea('width', onWidthChange, width)}
                    {renderTextArea('height', onHeightChange, height)}
                    {renderTextArea('mines', onMinesChange, mines)}
                </div>
                <div>
                    <input type="button"
                           className="new-game-btn"
                           value="New Game"
                           onClick={onNewGame}
                    />
                </div>
            </div>
            <div>
                this is the game board
            </div>
        </div>
    )
}

export default MainPage;