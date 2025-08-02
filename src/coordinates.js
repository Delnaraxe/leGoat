/**
 * Module de gestion des coordonnées pour un échiquier
 */

const coordinatesMap = {};

/**
 * Initialise le tableau de coordonnées
 */
function initCoordinatesMap() {
  for (let i = 1; i < 8; i++) {
    const letter = String.fromCharCode(64 + i); // 65 = 'A' en ASCII
    coordinatesMap[letter] = [];
    for (let j = i; j <= 49; j = j + 7) {
      coordinatesMap[letter].push(j);
    }
  }
}

initCoordinatesMap();

export default coordinatesMap;
