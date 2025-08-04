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

  constructor(newPosition, typefoe, nbFoe) {
    this.position = newPosition;
    this.nature = typefoe;
    this.id = nbFoe;
    this.move(newPosition);
  }

  move(newPosition) {
    if (!newPosition) {
      throw new Error(errorMessages.INVALID_POSITION);
    }

    /** Generation icone */
    const foeIcon = document.createElement("i");
    if (this.nature == "tour") {
      foeIcon.classList.add("ph", "ph-castle-turret");
    } else if (this.nature == "fou") {
      foeIcon.classList.add("ph", "ph-crown-cross");
    } else if (this.nature == "roi") {
      foeIcon.classList.add("ph", "ph-crown");
    }

    const tileDiv = document.querySelector(`[data-pos="${newPosition}"]`);
    if (!tileDiv) {
      throw new Error(`${errorMessages.TILE_NOT_FOUND} ${newPosition}`);
    }
    tileDiv.appendChild(foeIcon);
  }
}

export default Foe;

// const rockIcon = document.createElement("i");
// rockIcon.classList.add("ph", "ph-castle-turret");
// const fouIcon = document.createElement("i");
// fouIcon.classList.add("ph", "ph-crown-cross");
// const kingIcon = document.createElement("i");
// kingIcon.classList.add("ph", "ph-crown");
