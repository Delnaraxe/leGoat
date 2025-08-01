const chessboard = document.getElementById("chessboard");
const newTile = document.createElement("div");

function initChessboard() {
  for (let i = 1; i <= 49; i++) {
    const tile = newTile.cloneNode(false);
    tile.setAttribute("data-pos", i);
    chessboard.appendChild(tile);
  }
}
initChessboard();

const coordinatesMap = {};
function initCoordinatesMap() {
  for (let i = 1; i < 8; i++) {
    const letter = String.fromCharCode(64 + i); // 65 = 'A' en ASCII
    coordinatesMap[letter] = [];
    for (let j = i; j <= 49; j = j + 7) {
      coordinatesMap[letter].push(j);
    }
  }
  console.log(coordinatesMap);
}
initCoordinatesMap();

function initHorsePos() {
  const initPosition = ["D", "4"];
  const col = initPosition[0];
  const row = initPosition[1];
  const position = coordinatesMap[col][row - 1];

  const horseIcon = document.createElement("i");
  horseIcon.classList.add("ph", "ph-horse");

  const initTileDiv = document.querySelector(`[data-pos="${position}"]`);
  initTileDiv.appendChild(horseIcon);
}
initHorsePos();
