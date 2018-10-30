import React from 'react';

import MainPage from './MainPage.component'


class MainPageContainer extends React.Component {
    constructor(props){
        super(props);
        //props.gameboard
        this.state = {
            width: 10,
            height: 10,
            mines: 10,
        }
        props.board.startGame(10,10,10);
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
            alert(`Invalid value: ${value} less than min value`);
            return;
        }
        if(num>max){
            alert(`Invalid value: ${value} more than max value`);
            return;
        }
        this.setState({[key]: num});
    }

    onNewGame = () => {
        const {width, height, mines} = this.state;
        //TODO: add validation not empty
        this.props.board.startGame(width, height, mines);
    }

    render() {
        console.log('rerender')
        const {width, height, mines} = this.state;
        return(
            <MainPage onNewGame={this.onNewGame}
                      width={width}
                      onWidthChange={(value)=>this.onOptionChange('width', value, 1, 300)}
                      height={height}
                      onHeightChange={(value)=>this.onOptionChange('height', value, 1, 300)}
                      mines={mines}
                      onMinesChange={(value)=>this.onOptionChange('mines', value, 0, this.state.width*this.state.height)}
            />
        );
    }
}

export default MainPageContainer;