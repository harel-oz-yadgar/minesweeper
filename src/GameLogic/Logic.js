function initOptions(width, height, mines){
    return {
        width,
        height,
        mines
    };
}

function initBoard(width, height, mines){
    let board= [];
    for(let i=0; i<height; i++){
        let row = [];
        for(let j=0; j<width; j++){
            row.push(initTile(i, j));
        }
        board.push(row);
    }


    return {
        flagsLeft: mines,
        tilesLeft: width*height,
        board
    };
}

function initTile(i, j){
    return {
        isVisiable: false,
        isMine: false,
        isFlagged: false,
        numOfMines: 0,
        i,
        j,
    }
}
/*
var GameBoard = {
    startGame: function(width, height, mines) {
        console.log("new game")
        this.options = initOptions(width, height, mines);
        this.boardData = initBoard(width, height, mines);
        this.boardData.isMineClicked = false;
        this.populateMines();
        this.markNumOfMines();
        console.log(this)
    },

    populateMines: function(){
        let numOfMines = 0;
        while(numOfMines !== this.options.mines){
            let i = Math.floor(Math.random()*this.options.height);
            let j = Math.floor(Math.random()*this.options.width);
            if(!this.boardData.board[i][j].isMine){
                this.boardData.board[i][j].isMine = true;
                numOfMines++;
            }
        }
    },

    markNumOfMines: function(){
    for (let i = 0; i < this.options.height; i++) {
        for (let j = 0; j < this.options.width; j++) {
            if (!this.boardData.board[i][j].isMine) {
                let neighboringMines = 0;
                for (let k = i - 1; k <= i + 1; k++) {
                    for (let l = j - 1; l <= j + 1; l++) {
                        if (k >= 0 && k < this.options.height && l >= 0 && l < this.options.width) {
                            if (this.boardData.board[k][l].isMine) {
                                neighboringMines++;
                            }
                        }
                    }
                }
                this.boardData.board[i][j].numOfMines = neighboringMines;
            }
        }
    }
},

    clickTile: function(row, col){
        if(this.boardData.board[row][col].isVisiable){
            return;
        }
        if(this.boardData.board[row][col].isFlagged){
            return;
        }

        this.boardData.board[row][col].isVisiable = true;
        if(this.boardData.board[row][col].isMine){
            this.boardData.isMineClicked = true;
            return;
        }
        this.boardData.tilesLeft--;
        if(this.boardData.board[row][col].numOfMines === 0) {
            for (let i = row - 1; i <= row + 1; i++) {
                for (let j = col - 1; j <= col + 1; j++) {
                    if (i >= 0 && i < this.options.height && j >= 0 && j < this.options.width) {
                        this.clickTile(i, j);
                    }
                }
            }
        }
    },

    flagTile: function(row, col){
        if(this.boardData.board[row][col].isVisiable) {
            return;
        }
        if(this.boardData.board[row][col].isFlagged) {
            this.boardData.board[row][col] = false;
        }
        else {
            this.boardData.board[row][col] = true;
        }
    },


}
*/

function GameBoard(width, height, mines){
    this.options = initOptions(width, height, mines);
    this.boardData = initBoard(width, height, mines);
    this.boardData.isMineClicked = false;
    this.clickTile = (row, col) => {
        if(this.boardData.board[row][col].isVisiable){
            return;
        }
        if(this.boardData.board[row][col].isFlagged){
            return;
        }

        this.boardData.board[row][col].isVisiable = true;
        if(this.boardData.board[row][col].isMine){
            this.boardData.isMineClicked = true;
            for(let i=0; i<this.options.height; i++){
                for(let j=0; j<this.options.width; j++){
                    if(this.boardData.board[i][j].isMine){
                        this.boardData.board[i][j].isVisiable = true;
                    }
                }
            }
            return;
        }
        this.boardData.tilesLeft--;
        if(this.boardData.board[row][col].numOfMines === 0) {
            for (let i = row - 1; i <= row + 1; i++) {
                for (let j = col - 1; j <= col + 1; j++) {
                    if (i >= 0 && i < this.options.height && j >= 0 && j < this.options.width) {
                        this.clickTile(i, j);
                    }
                }
            }
        }
    };
    this.flagTile = (row, col) => {
        if(this.boardData.board[row][col].isVisiable) {
            return;
        }
        if(this.boardData.board[row][col].isFlagged) {
            this.boardData.board[row][col] = false;
        }
        else {
            this.boardData.board[row][col] = true;
        }
    };

    (function populateMines(){
        let numOfMines = 0;
        while(numOfMines !== this.options.mines){
            let i = Math.floor(Math.random()*this.options.height);
            let j = Math.floor(Math.random()*this.options.width);
            if(!this.boardData.board[i][j].isMine){
                this.boardData.board[i][j].isMine = true;
                numOfMines++;
            }
        }
    }).bind(this)();

    (function markNumOfMines(){
        for (let i = 0; i < this.options.height; i++) {
            for (let j = 0; j < this.options.width; j++) {
                if (!this.boardData.board[i][j].isMine) {
                    let neighboringMines = 0;
                    for (let k = i - 1; k <= i + 1; k++) {
                        for (let l = j - 1; l <= j + 1; l++) {
                            if (k >= 0 && k < this.options.height && l >= 0 && l < this.options.width) {
                                if (this.boardData.board[k][l].isMine) {
                                    neighboringMines++;
                                }
                            }
                        }
                    }
                    this.boardData.board[i][j].numOfMines = neighboringMines;
                }
            }
        }
    }).bind(this)();
}

export default GameBoard;