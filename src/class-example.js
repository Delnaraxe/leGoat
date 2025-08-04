// TODO:
// utiliser une class de base pour les ennemis car les ennemis auront des propriétés et méthodes communes
// chaque type d'ennemi (tour, fou, roi) extends cette classe de base pour hériter de ses propriétés et méthodes
// ainsi, on peut facilement ajouter de nouveaux types d'ennemis sans dupliquer le code

// Un exemple :

// Classe de base
class Shape {
  constructor(color) {
    this.color = color;
  }

  // Méthode commune à toutes les formes
  describe() {
    return `Une forme de couleur ${this.color}`;
  }

  // Méthode à override dans les classes enfants
  getArea() {
    return 0;
  }
}

// Classes enfants
class Circle extends Shape {
  constructor(color, radius) {
    super(color); // Appel du constructeur parent
    this.radius = radius; // Propriété spécifique au cercle
  }

  // Override de la méthode getArea de la classe Shape
  getArea() {
    return Math.PI * this.radius * this.radius;
  }
}

// Exemple d'utilisation
const circle = new Circle("rouge", 5);
console.log(circle.describe()); // "Une forme de couleur rouge"
console.log(`L'aire du cercle est ${circle.getArea()}`); // "L'aire du cercle est 78.5"

// On peut créer d'autres classes enfants pour d'autres formes
class Rectangle extends Shape {
  constructor(color, width, height) {
    super(color);
    this.width = width; // Propriété spécifique au rectangle
    this.height = height; // Propriété spécifique au rectangle
  }

  // Override de la méthode getArea de la classe Shape
  getArea() {
    return this.width * this.height;
  }
}

// Exemple d'utilisation
const rectangle = new Rectangle("bleu", 4, 6);
console.log(rectangle.describe()); // "Une forme de couleur bleu"
console.log(`L'aire du rectangle est ${rectangle.getArea()}`); // "L'aire du rectangle est 24"
