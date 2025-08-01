// cloneNode(false)
//add A1-7 to div
const chessboard = document.getElementById("chessboard");
const newTile = document.createElement("div");

function createDiv() {
  chessboard.appendChild(newTile.cloneNode(false))
}

for (let i = 1; i < 49; i++) {
  createDiv();
}