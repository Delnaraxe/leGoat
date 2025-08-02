import Horse from "./horse.js";

function initMain() {
  const chessboard = document.getElementById("chessboard");
  const newTile = document.createElement("div");

  /**
   * Initialise le plateau d'échecs
   * Crée 49 cases numérotées de 1 à 49
   * Chaque case est un div avec un attribut data-pos correspondant à sa position
   */
  function initChessboard() {
    for (let i = 1; i <= 49; i++) {
      const tile = newTile.cloneNode(false);
      tile.setAttribute("data-pos", i);
      chessboard.appendChild(tile);
    }
  }
  initChessboard();

  // Crée une instance de Horse avec la position initiale ["D", "4"]
  const horse = new Horse(["D", "4"]);
}

initMain();
