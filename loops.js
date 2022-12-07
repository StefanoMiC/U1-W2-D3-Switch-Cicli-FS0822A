// while (condition) {
// blocco di codice ripetuto fin tanto che la condizione sarà vera
// }

let num = 0;

let text = "";

while (num < 10) {
  console.log(num);
  text += num;

  console.log(text);
  num++;
}

// con do... while almeno un ciclo viene eseguito anche se la condizione non è vera!

// do {
//   console.log(num);
//   text = 1;

//   console.log(text);

//   //   num++;
// } while (num !== 0);

console.log(text);

// for(variabile di controllo; condizione; incremento) {

// }

for (let i = 0; i < 20; i += 1) {
  console.log(i);

  for (let j = 0; j < 2; j += 1) {
    console.log(j);
  }
}

const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

// console.log(days[0]);
// console.log(days[1]);
// console.log(days[2]);
// console.log(days[3]);
// console.log(days[4]);
// console.log(days[5]);
// console.log(days[6]);

console.log(days.length);
days.pop();

console.log(days.length);

for (let i = 0; i < days.length; i++) {
  if (days[i] === "wed") {
    continue;
  }
  console.log("FOR", days[i]);
  if (days[i] === "fri") {
    break;
  }
}
