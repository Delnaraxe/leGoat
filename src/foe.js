/** Spawn Foe
 * il s'agit de creer des ennemis aléatoire
 * sur des positions aléatoire
 * parmis une selction proposée de position
 * en bordure de jeu
 * puis de les afficher
 * creer les class tour, fou, roi
 * class Tour extend Foe{} pour héritage
 */
const errorMessages = {
  INVALID_POSITION: "La position doit être une coordonnée (ex: 'E7')",
  TILE_NOT_FOUND: "La case n'a pas été trouvée pour la position:",
};

/** class Foe reprensentant un enemy sur boardchess
 * @param position[] determiné par RNG
 * @param nature determine le type de foe by RNG
 * @param id assign un numéro unique à un ennemi
 * On placera ici le move() par défaut
 */
class Foe {
  id = 0;

  constructor(initialPosition, typeFoe, idFoe) {
    this.type = typeFoe;
    this.id = idFoe; // Assigner un ID unique à chaque ennemi
    this.move(initialPosition);
  }

  move(newPosition) {
    if (!newPosition) {
      throw new Error(errorMessages.INVALID_POSITION);
    }

    this.position = newPosition;

    const foeIcon = this.draw();

    const tileDiv = document.querySelector(`[data-pos="${newPosition}"]`);
    if (!tileDiv) {
      throw new Error(`${errorMessages.TILE_NOT_FOUND} ${newPosition}`);
    }
    tileDiv.appendChild(foeIcon);
  }

  /**
   * Méthode pour dessiner l'icône de l'ennemi
   * @returns L'élément DOM représentant l'icône de l'ennemi
   */
  draw() {
    const icon = document.createElement("i");
    switch (this.type) {
      case "tour":
        icon.classList.add("ph", "ph-castle-turret");
        break;
      case "fou":
        icon.classList.add("ph", "ph-crown-cross");
        break;
      case "roi":
        icon.classList.add("ph", "ph-crown");
        break;
      default:
        throw new Error("Type d'ennemi inconnu: " + this.type);
    }

    return icon;
  }
}

export default Foe;
