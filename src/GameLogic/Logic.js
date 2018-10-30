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
            row.push(initTile())
        }
        board.push(row);
    }


    return {
        flagsLeft: mines,
        tilesLeft: width*height,
        board
    };
}

function initTile(){
    return {
        isVisiable: false,
        isMine: false,
        isFlagged: false,
        numOfMines: 0,

    }
}

var GameBoard = {
    startGame: function(width, height, mines) {
        this.options = initOptions(width, height, mines);
        this.board = initBoard(width, height, mines);
        this.board.isMineClicked = false;
        this.populateMines();
        this.markNumOfMines();
    },

    populateMines: function(){
        let numOfMines = 0;
        while(numOfMines !== this.options.mines){
            let i = Math.floor(Math.random()*this.options.height);
            let j = Math.floor(Math.random()*this.options.width);
            if(!this.board.board[i][j].isMine){
                this.board.board[i][j].isMine = true;
                numOfMines++;
            }
        }
    },

    markNumOfMines: function(){
    for (let i = 0; i < this.options.height; i++) {
        for (let j = 0; j < this.options.width; j++) {
            if (!this.board.board[i][j].isMine) {
                let neighboringMines = 0;
                for (let k = i - 1; k <= i + 1; k++) {
                    for (let l = j - 1; l <= j + 1; l++) {
                        if (k >= 0 && k < this.options.height && l >= 0 && l < this.options.width) {
                            if (this.board.board[k][l].isMine) {
                                neighboringMines++;
                            }
                        }
                    }
                }
                this.board.board[i][j].numOfMines = neighboringMines;
            }
        }
    }
},

    clickTile: function(row, col){
        if(this.board.board[row][col].isVisiable){
            return;
        }
        if(this.board.board[row][col].isFlagged){
            return;
        }

        this.board.board[row][col].isVisiable = true;
        if(this.board.board[row][col].isMine){
            this.board.isMineClicked = true;
            return;
        }
        this.board.tilesLeft--;
        if(this.board.board[row][col].numOfMines==0) {
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
        if(this.board.board[row][col].isVisiable) {
            return;
        }
        if(this.board.board[row][col].isFlagged) {
            this.board.board[row][col] = false;
        }
        else {
            this.board.board[row][col] = true;
        }
    },


}

export default GameBoard;