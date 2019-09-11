const Piece = require("./piece")
const Board = require("./board")

const adjacentPos = {
  top: [1, 0], //top
  top_right: [1, 1], //top-right
  right: [0, 1], //right
  bottom_right: [-1, 1], //bottom-right
  bottom: [-1, 0], //bottom
  bottom_left: [-1, -1], //bottom-left
  left: [0, -1], //left
  top_left: [1, -1] //top-left
};

function Game(board) {
    this.board = board;
}

Game.prototype.placePiece = function(position, color) {
  let move = this.possibleMove(position, color);
  let endPos = move[0];
  let dir = move["dir"];
    if (endPos) {
        this.board.grid[position[0]][position[1]] = new Piece(color);
        this.flipPieces(position, endPos, dir);
        return true;
    } else {
        console.log('invalid move');
        return false;
    }
}

Game.prototype.possibleMove = function(pos, color) {
    if (pos[0] > 7 || pos[0] < 0 || pos[1] > 7 || pos[1] < 0) return false;
    if (this.board.grid[pos[0]][pos[1]]) return false;
    let valid = false;
    Object.keys(adjacentPos).forEach((dir) => {
        let board = this.board;

        let newPos = [pos[0] + adjacentPos[dir][0], pos[1] + adjacentPos[dir][1]];
        if (!(newPos[0] > 7 || newPos[0] < 0 || newPos[1] > 7 || newPos[1] < 0)) {
            let possiblePiece = board.grid[newPos[0]][newPos[1]];
                if (possiblePiece) {
                if(possiblePiece.color !== color) {
                    while (possiblePiece) {
                        if (!(newPos[0] > 7 || newPos[0] < 0 || newPos[1] > 7 || newPos[1] < 0)) {
                            newPos = [newPos[0] + adjacentPos[dir][0], newPos[1] + adjacentPos[dir][1]];
                            possiblePiece = board.grid[newPos[0]][newPos[1]];
                            if (possiblePiece) {
                                if (possiblePiece.color === color) {
                                    valid = [[newPos[0], newPos[1]]];
                                    valid["dir"] = adjacentPos[dir];
                                    break;
                                }
                            }
                        }
                    }
                }
            }
        }
    })
  return valid
}

Game.prototype.flipPieces = function(start, end, dir) {
    let startPos = [start[0] + dir[0], start[1] + dir[1]];
    while (startPos[0] !== end[0] || startPos[1] !== end[1]) {
        this.board.grid[startPos[0]][startPos[1]].flip();
        startPos = [startPos[0] + dir[0], startPos[1] + dir[1]];
    }
}


let board = new Board(); 
let game = new Game(board);
game.placePiece([2,3], "black");
board.render();
game.placePiece([2,2], "white");
board.render();