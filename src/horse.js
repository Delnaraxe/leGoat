import coordinatesMap from "./coordinates.js";

const errorMessages = {
  INVALID_POSITION: "La position doit être un tableau de deux éléments",
  TILE_NOT_FOUND: "La case n'a pas été trouvée pour la position:",
};

/**
 * Classe Horse représentant un cheval sur un échiquier
 */
class Horse {
  position = [];

  /**
   * Constructeur de la classe
   * Il est appelé quand on crée une nouvelle instance de cette classe (par exemple : new Horse(["E", "5"]))
   * Si aucune position n'est donné à la création, on utilise la valeur par défaut ["D", "4"] (par exemple : new Horse())
   */
  constructor(initialPosition = ["D", "4"]) {
    // Déplace le cheval à la position initiale
    this.move(initialPosition);
  }

  /**
   * Méthode pour déplacer le cheval
   * @param newPosition La nouvelle position du cheval, par exemple ["A", "3"]
   */
  move(newPosition) {
    if (!newPosition || newPosition.length !== 2) {
      throw new Error(errorMessages.INVALID_POSITION);
    }

    this.position = newPosition;

    const col = newPosition[0];
    const row = newPosition[1];
    const position = coordinatesMap[col][row - 1];

    const horseIcon = document.createElement("i");
    horseIcon.classList.add("ph", "ph-horse");

    const tileDiv = document.querySelector(`[data-pos="${position}"]`);
    if (!tileDiv) {
      throw new Error(`${errorMessages.TILE_NOT_FOUND} ${position}`);
    }
    tileDiv.appendChild(horseIcon);
  }
}

export default Horse;
