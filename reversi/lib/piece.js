function Piece(color) {
  this.color = color;
}


Piece.prototype.flip = function() {
  this.color = (this.color === "white" ? "black" : "white");
}

Piece.prototype.toString = function() {
    return (this.color === "white" ? "⚪" : "⚫");
}


module.exports = Piece;