const fruit = "Ananas";

if (fruit === "Banana") {
} else if (fruit === "Apple") {
}

switch (fruit) {
  case "Banana":
    console.log("Hai trovato una banana");
    break;
  case "Apple":
    console.log("Ecco una mela");
    break;
  case "Papaya":
    console.log("Una Papaya");
    break;
  default:
    console.log("Non ce l'abbiamo");
}

// switch (true) {
//   case variable < 10 && variable > 8:
//     break;

//   case variable > 10:
//     break;
// }
