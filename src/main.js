import Horse from "./horse.js";

function initMain() {
  const chessboard = document.getElementById("chessboard");
  const newTile = document.createElement("div");
  const size = 7; // Taille du plateau d'échecs (7x7)

  /**
   * Initialise le plateau d'échecs
   * Crée un tableau de 7x7 cases
   * Chaque case a une position unique (A1, B2, etc..)
   */
  function initChessboard() {
    for (let i = 1; i <= size; i++) {
      createRow(i);
    }
  }

  function createRow(rowNumber) {
    for (let i = 1; i <= size; i++) {
      const tile = newTile.cloneNode(false);
      const letter = String.fromCharCode(64 + i); // Convertit le numéro de colonne en lettre (A, B, ...)
      const coordinates = letter + rowNumber; // Combine la lettre de la colonne et le numéro de la ligne pour former la position (A1, B2, etc..)
      tile.setAttribute("data-pos", coordinates); // Définit la position de la case ("A1", "B2", etc..)
      tile.addEventListener("click", onTileClick); // Ajoute un listener on click sur la case
      chessboard.appendChild(tile);
    }
  }

  function onTileClick(event) {
    let tile = event.target;

    if (tile.tagName.toLowerCase() !== "div") {
      tile = tile.parentNode; // Si l'élément cliqué n'est pas une case (l'icone du cheval par exemple), on remonte au parent (la div)
    }

    const position = tile.getAttribute("data-pos");
    console.log(tile);
    horse.move(position);
  }

  initChessboard();

  // Crée une instance de Horse avec la position initiale "D4"
  const horse = new Horse("D4");
}

initMain();
