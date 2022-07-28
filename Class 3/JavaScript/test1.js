function Dog(name, age, colo) {
  this.name = name;
  this.age = age;
  this.colo = colo;
}

function testObjects() {
  let lola = {
    name: "lola",
    age: 13,
    color: "pink",
  };
  console.log(lola);

  dog2 = new Dog("LOLAST", 2, "BLACK");
  console.log(dog2);
}

testObjects();
