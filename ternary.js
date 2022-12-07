const student = {
  name: "john",
  admissionPoints: 50
};

// let admitted = false;

// if (student.admissionPoints >= 50) {
//   admitted = true;
// }

// TERNARY OPERATOR

let admitted = student.admissionPoints >= 50 ? "È ammesso" : "Non è ammesso";

console.log(admitted);

const str = "";
console.log([] ? true : false);
console.log([] == false);

console.log(Boolean([]));
console.log(Number([]));

console.log(student.name !== "" ? true : false);
