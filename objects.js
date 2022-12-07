const propertyToCreate = "model";

const car = {
  brand: "Ford",
  model: "Focus",
  licencePlate: "12DF19",
  color: "silver",
  year: 2015,
  accidents: false
};

const car2 = {
  brand: "Ford",
  model: "Focus",
  licencePlate: "12DE19",
  color: "silver",
  year: 2016,
  accidents: true
};

console.log(car.accidents);
console.log(car2.accidents);

const licence = "licence";
const plate = "plate";

const car3 = {
  brand: "Ford",
  [propertyToCreate]: "Mercedes",
  licencePlate: "12DE19",
  color: "silver",
  year: 2016,
  accidents: true
};

const objectKeys = Object.keys(car);
console.log(objectKeys);
const objectValues = Object.values(car);
console.log(objectValues);
const objectEntries = Object.entries(car);
console.log(objectEntries);

const propertyToLookUpTo = objectKeys[2];
// const propertyToLookUpTo = "licence plate";

// car.licence - place // WRONG
console.log(car[licence + "-" + plate]); // car["licence-plate"]
console.log(car2["licencePlate"]);

if (propertyToLookUpTo !== undefined) {
  console.log(car2[propertyToLookUpTo]);
}

console.log(car3["model"]);
console.log(car3.model);

// car3["owners"] = 1;
// car3;

car3.owners = [
  { id: 0, name: "Stefano", acquisitionYear: 2015 },
  { id: 1, name: "Alberto", acquisitionYear: 2017 }
];

const arrOfOwners = [];

for (let i = 0; i < car3.owners.length; i++) {
  const owner = car3.owners[i];
  // console.log(owner.name)

  const newObj = {
    name: owner.name
  };

  arrOfOwners.push(newObj);
}

// for (let i = 0; i < car3.owners.length; i++) {
//   console.log(arrOfOwners);
// }

console.log(arrOfOwners);

delete car3.accidents;
console.log(car3.owners[0].id);

// const car4 = car2; // NOT ALLOWED

const car4 = Object.assign({}, car2);

delete car4.color;
console.log(car4);
console.log(car2);

const newKeys = objectKeys.slice();
// newKeys.pop();

const indexFound = newKeys.indexOf("licencePlate");
console.log(indexFound);

if (indexFound !== -1) {
  newKeys.splice(indexFound, 1);
}

console.log(objectKeys);
console.log(newKeys);

console.log(typeof newKeys);
console.log(Array.isArray(newKeys));
console.log(Array.isArray(car));

console.log(typeof 2);
console.log(typeof NaN);
console.log(isNaN(NaN));
