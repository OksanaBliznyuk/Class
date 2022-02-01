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
}
//Object
const animal1 = new Animal(
  "horse",
  "Przewalski",
  "Ukraine",
  "lightbrown",
  "img"
);
// function
console.log(animal1);
animal1.showAnimal();
