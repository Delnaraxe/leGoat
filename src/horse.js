const errorMessages = {
  INVALID_POSITION: "La position doit être une coordonnée (ex: 'E7')",
  TILE_NOT_FOUND: "La case n'a pas été trouvée pour la position:",
};

/**
 * Classe Horse représentant un cheval sur un échiquier
 */
class Horse {
  position = "";

  /**
   * Constructeur de la classe
   * Il est appelé quand on crée une nouvelle instance de cette classe (par exemple : new Horse("E7"))
   * Si aucune position n'est donné à la création, on utilise la valeur par défaut "D4" (par exemple : new Horse())
   */
  constructor(initialPosition = "D4") {
    // Déplace le cheval à la position initiale
    this.move(initialPosition);
  }

  /**
   * Méthode pour déplacer le cheval
   * @param newPosition La nouvelle position du cheval
   */
  move(newPosition) {
    if (!newPosition) {
      throw new Error(errorMessages.INVALID_POSITION);
    }

    this.position = newPosition;

    const horseIcon = document.createElement("i");
    horseIcon.classList.add("ph", "ph-horse");

    const tileDiv = document.querySelector(`[data-pos="${newPosition}"]`);
    if (!tileDiv) {
      throw new Error(`${errorMessages.TILE_NOT_FOUND} ${newPosition}`);
    }
    tileDiv.appendChild(horseIcon);
  }
}

export default Horse;
