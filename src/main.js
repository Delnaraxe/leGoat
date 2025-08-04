import Horse from "./horse.js";
import Foe from "./foe.js";

function initMain() {
  const chessboard = document.getElementById("chessboard");
  const newTile = document.createElement("div");
  const size = 7; // Taille du plateau d'échecs (7x7)
  const foes = []; // Liste pour stocker les ennemis

  /** Initialise le plateau d'échecs
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
    if (!horse) return; // Si le cheval n'est pas encore créé, on ne fait rien

    let tile = event.target;

    if (tile.tagName.toLowerCase() !== "div") {
      tile = tile.parentNode; // Si l'élément cliqué n'est pas une case (l'icone du cheval par exemple), on remonte au parent (la div)
    }

    const position = tile.getAttribute("data-pos");
    horse.move(position);

    spawnFoe(); // Appelle la fonction pour créer un ennemi aléatoire à chaque clic
  }

  /** RNG type de Foe */
  function randomizeTypeFoe() {
    let number = Math.random();

    // TODO: remettre à 0.5, pour l'instant, on fait spawn la tour
    if (number <= 0.5) {
      return "tour";
    }

    if (number <= 0.8) {
      return "fou";
    }

    return "roi";
  }

  /** RNG position de Foe
   * Entre A1-7, G1-7, A-G1, A-G7
   * Lettre horizontal
   * Nombre vertical
   * soit col A || G puis 1 à 7
   * soit row 1 || 7 puis A à G
   */
  function randomizePositionFoe() {
    // TODO : bug letter = NaN
    const fate = Math.random();
    if (fate < 0.25) {
      let letter = "A";
      let number = Math.floor(Math.random() * 7) + 1;
      let positionFoe = letter + number;
      return positionFoe;
    } else if (fate < 0.5 && fate >= 0.25) {
      let number = 1;
      const array = ["A", "B", "C", "D", "E", "F", "G"];
      let numberArray = Math.floor(Math.random() * 7) + 1;
      let letter = array[numberArray];
      let positionFoe = letter + number;
      return positionFoe;
    } else if (fate < 0.75 && fate >= 0.5) {
      let letter = "G";
      let number = Math.floor(Math.random() * 7) + 1;
      let positionFoe = letter + number;
      return positionFoe;
    } else {
      let number = 7;
      const array = ["A", "B", "C", "D", "E", "F", "G"];
      let numberArray = Math.floor(Math.random() * 7) + 1;
      let letter = array[numberArray];
      let positionFoe = letter + number;
      return positionFoe;
    }
  }

  /**
   * TODO: ajouter les positions interdites pour les ennemis (position du cheval, des autres ennemis)
   * Randomize une position pour un ennemi, en évitant les positions interdites
   * @returns Une position aléatoire pour un ennemi
   */
  function reworkRandomizePositionFoe() {
    const possibleSpawnList = [
      "A1",
      "A2",
      "A3",
      "A4",
      "A5",
      "A6",
      "A7",
      "B7",
      "C7",
      "D7",
      "E7",
      "F7",
      "G7",
      "G6",
      "G5",
      "G4",
      "G3",
      "G2",
      "G1",
      "F1",
      "E1",
      "D1",
      "C1",
      "B1",
    ];
    const forbiddenSpawnList = foes.map((foe) => foe.position); // Liste des positions interdites pour les ennemis
    const spawnList = possibleSpawnList.filter(
      (position) => !forbiddenSpawnList.includes(position)
    ); // Filtre les positions interdites
    const randomIndex = Math.floor(Math.random() * spawnList.length);
    return spawnList[randomIndex];
  }

  /** Gestion des ennemis
   * 1 Click = 1 ennemi aléatoire
   */
  function spawnFoe() {
    const typeFoe = randomizeTypeFoe();
    const positionFoe = reworkRandomizePositionFoe();

    foes.push(new Foe(positionFoe, typeFoe, foes.length));
  }

  initChessboard();

  // Crée une instance de Horse avec la position initiale "D4"
  const horse = new Horse("D4");
}

initMain();
