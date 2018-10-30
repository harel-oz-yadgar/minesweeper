import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';


import MainPage from './Components/MainPage/MainPage.container';

import board from './GameLogic/Logic';
board.startGame(5, 2, 2);
//console.log(board)


ReactDOM.render(
    <MainPage />,
    document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
