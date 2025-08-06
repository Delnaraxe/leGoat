const errorMessages = {
  INVALID_POSITION: "La position doit être une coordonnée (ex: 'E7')",
  TILE_NOT_FOUND: "La case n'a pas été trouvée pour la position:",
};

const chessboard = document.getElementById("chessboard");

/**
 * Classe Horse représentant un cheval sur un échiquier
 */
class Horse {
  /**
   * Constructeur de la classe
   * Il est appelé quand on crée une nouvelle instance de cette classe (par exemple : new Horse("E7"))
   * Si aucune position n'est donné à la création, on utilise la valeur par défaut "D4" (par exemple : new Horse())
   */
  constructor(initialPosition = "D4") {
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

    const tileDiv = chessboard.querySelector(`[data-pos="${newPosition}"]`);
    if (!tileDiv) {
      throw new Error(`${errorMessages.TILE_NOT_FOUND} ${newPosition}`);
    }

    this.remove();
    this.draw(tileDiv);
  }

  /**
   * Méthode pour supprimer l'icône du cheval de l'échiquier
   */
  remove() {
    const horseIcon = chessboard.querySelector(".ph-horse");
    if (horseIcon) {
      horseIcon.remove();
    }
  }

  /**
   * Méthode pour dessiner l'icône du cheval sur l'échiquier dans la case spécifiée
   * @param tileDiv La case où dessiner l'icône du cheval
   */
  draw(tileDiv) {
    const icon = document.createElement("i");
    icon.classList.add("ph", "ph-horse");
    tileDiv.appendChild(icon);
  }

  /**
   * Vérifie si la position est valide en calculant la distance entre les coordonnées
   * @param position La position à vérifier (ex: "E7")
   * @returns {boolean} true si la position est valide, false sinon
   */
  isValidPosition(position) {
    const positionToTest = position.split("");
    const positionHorse = this.position.split("");

    const colDiff = Math.abs(
      positionToTest[0].charCodeAt(0) - positionHorse[0].charCodeAt(0)
    );
    const rowDiff = Math.abs(positionToTest[1] - positionHorse[1]);

    // Vérifie si le mouvement est valide (en L)
    return (colDiff === 2 && rowDiff === 1) || (colDiff === 1 && rowDiff === 2);
  }
}

export default Horse;
