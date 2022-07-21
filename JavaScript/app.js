//Create a hello function that will print your name
function hello() {
  console.log(" Sebastian LW");
}

function sayHello(name) {
  lastName = "Wells";
  console.log("Hello " + name + " " + lastName);
}

function sum(num1, num2) {
  console.log(num1 + num2);
  return num1 + num2;
}

function ex1() {
  //using for loops print numbers from 0-20
  //except the 7
  for (let i = 0; i <= 20; i++) {
    if (i != 7 && i != 13) {
      console.log(i);
    } else {
      //nothing happens
    }
  }
  let name = "";
  /*
    if(name == "") {
        console.log("Name is empty");

    }
    }

    if(name.length == 0){
        console.log("Name is empty");
    }
    */
  if (!name) {
    console.log("Name is empty");
  }
}

function ex2() {
  let numbers = [0, 1, 2, -3, 4, 5, 6, -7, 8, 9, 10, -11, 12];
  //A print every number in the array
  for (let i = 0; i < numbers.length; i++) {
    console.log("Number is " + numbers[i]);
  }

  //B Sum all the number in the array
  let acum = 0;
  for (let i = 0; i < numbers.length; i++) {
    acum += numbers[i];
  }

  //C Display all the negative numbers
  console.log("The sum of all numbers is " + acum);
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < 0) {
      console.log(numbers[i]);
    }
  }
}
function init() {
  console.log("Intro page");
  //Access any DOM element
  hello();

  let nameUser = "Sebastian";
  sayHello(nameUser);

  let result = sum(21, 21); //ref to hitchhiker's guide to the galaxy
  console.log(result);

  ex1();
  ex2();
}
window.onload = init;
