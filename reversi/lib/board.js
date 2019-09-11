const Piece = require('./piece.js')

function Board() {
  this.grid = Array.from({length: 8 }, (value) => Array.from({length: 8}));
  this.grid[3][3] = new Piece('white');
  this.grid[3][4] = new Piece('black');
  this.grid[4][3] = new Piece('black');
  this.grid[4][4] = new Piece('white');
}

Board.prototype.render = function() {
    this.grid.forEach(function (row) {
        let spaced = row.map(function(el) {
            if (el) {
                return el.toString();
            } else {
                return ' ';
            }
        });
        console.log("|" + spaced.join('|') + "|")
    });
}

module.exports = Board;