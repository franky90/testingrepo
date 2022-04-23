let students = ["Pete", "Anna", "George"];
let animals = ["Dog", "Cat", "Cow"];

let all = students.concat(animals);
console.log(all);
console.log(all.includes("Cat"));
console.log(all.indexOf("Cat"));
console.log((all[0] = "Felek"));
console.log(all);

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numbers.forEach((n) => {
  console.log(n * n);
});

numbers.forEach((en) => {
  if (en % 2 === 0) console.log(en);
});
