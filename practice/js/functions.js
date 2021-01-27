function printName(firstName) {
  console.log("Hello " + firstName);
}

function Car(brandName, seats, driveType) {
  console.log(
    "Brand Name: " +
      brandName +
      "\nNumber of Seats: " +
      seats +
      "\nDrive Type: " +
      driveType
  );
}

// let firstName = "Trilok";
// let lastName = "Bakulapalli";

printName("Trilok"); // Here printName is the Calling Function
printName("Bakulapalli");

Car("Honda", 4, "FWD"); // Here Car is the Calling Function
Car("BMW", 5, "AWD");
Car("Truck", 18, "AWD");
