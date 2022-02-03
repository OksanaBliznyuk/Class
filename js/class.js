Class;
class Animal {
  constructor(species, name, country, color, imgUrl) {
    this.species = species;
    this.name = name;
    this.country = country;
    this.color = color;
    this.imgUrl = imgUrl;
  }
  //function
  showAnimal() {
    console.log("horse");
  }
  showAnimal() {
    console.log("Kitty");
  }
}
//Object
const animal1 = new Animal(
  "horse",
  "Przewalski",
  "Ukraine",
  "lightbrown",
  "img"
);

const animal2 = new Animal("Cheetan", "Kitty", "Iran", "Black", "imgUrl");

// function
console.log(animal1);
animal1.showAnimal("horse");

console.log(animal2);
animal2.showAnimal("Kitty");
