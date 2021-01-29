let x = 2;
let y = "2";
let a = 4;
let b = 20;
let c = 4;

let torf = false;

// Is Equal To
if (x == y) {
  console.log("Is x and y values equal to each other? \n", !torf);
} else {
  console.log("Is x and y values equal to each other? \n", torf);
}

// Is Exactly Equal To
if (x === y) {
  console.log("Is x and y values exactly equal to each other? \n", !torf);
} else {
  console.log("Is x and y values exactly equal to each other? \n", torf);
}

// Is Not Equal To
if (x != y) {
  console.log("Is x and y values not equal to each other? \n", !torf);
} else {
  console.log("Is x and y values not equal to each other? \n", torf);
}

// Is Not Equal To
if (x !== y) {
  console.log("Is x and y values exactly not equal to each other? \n", !torf);
} else {
  console.log("Is x and y values exactly not equal to each other? \n", torf);
}

// Is Less Than
if (a < b) {
  console.log("Is a less than b? ", !torf);
} else {
  console.log("Is a less than b? ", torf);
}

// Is Less Than or Equal To
if (a <= c) {
  console.log("Is a less than ro equla to c? ", !torf);
} else {
  console.log("Is a less than ro equla to c? ", torf);
}
