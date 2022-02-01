Class;
class Cat {
  constructor(name, color, species, imgUrl, country) {
    this.name = name;
    this.color = color;
    this.species = species;
    this.imgUrl = imgUrl;
    this.country = country;
  }
  showCat() {
    console.log("Kitty");
  }
}
const animal2 = new Cat("Kitty", "Black", "Cheetah", "img2", "country");
