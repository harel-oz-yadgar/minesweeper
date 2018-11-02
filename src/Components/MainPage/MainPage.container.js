import React from 'react';

import MainPage from './MainPage.component';
import GameBoard from '../../GameLogic/Logic';


class MainPageContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            width: 10,
            height: 10,
            mines: 10,
            gameboard: new GameBoard(10,10,10),
            inProgress: true,
        }
    }

    onOptionChange = (key, value, min, max) => {
        if(value===''){
            this.setState({[key]: value});
            return;
        }
        if(!value.match(/^-{0,1}\d+$/)) {
            alert(`Invalid value: ${value} is not a number`);
            return;
        }
        let num = parseInt(value);
        if(num<min){
            alert(`Invalid value: ${value}, value cannot be less than min value (${min})`);
            return;
        }
        if(num>max){
            alert(`Invalid value: ${value}, value cannot be more than max value (${max})`);
            return;
        }
        this.setState({[key]: num});
    }

    onNewGame = () => {
        const {width, height, mines} = this.state;
        //TODO: add validation not empty
        this.setState({
            gameboard: new GameBoard(width, height, mines),
            inProgress: true,
        })
    }

    onTileClick = (i, j, e) => {
        if (!this.state.inProgress) {//game already ended
            return;
        }

        const {gameboard} = this.state;
        if (e.shiftKey) {//flag
            gameboard.flagTile(i, j);
        }
        else {
            gameboard.clickTile(i, j);
        }

        this.forceUpdate();
        if (gameboard.boardData.isMineClicked) {
            setTimeout(() => alert('You lose, better luck next time'), 0);
            this.setState({inProgress: false});
        }
        else if (gameboard.options.mines === gameboard.boardData.tilesLeft) {
            setTimeout(() => alert('Congratulations you win'), 0);
            this.setState({inProgress: false})
        }
    }

    render() {
        const {width, height, mines, gameboard} = this.state;
        return(
            <MainPage board={gameboard.boardData.board}
                      flagsLeft={gameboard.boardData.flagsLeft}
                      onNewGame={this.onNewGame}
                      width={width}
                      onWidthChange={(value)=>this.onOptionChange('width', value, 1, 300)}
                      height={height}
                      onHeightChange={(value)=>this.onOptionChange('height', value, 1, 300)}
                      mines={mines}
                      onMinesChange={(value)=>this.onOptionChange('mines', value, 0, this.state.width*this.state.height)}
                      onTileClick={this.onTileClick}
            />
        );
    }
}

export default MainPageContainer;