// // 1. Create an object person with two properties, "name" and "age" and then updates the "age" property to a new value.
// //    Initial age should be 30.

// const person = {
//   name: "John",
//   age: 30,
// };

// person.age = 31;

// console.log(person.age);

// // 2. Write a function that takes an object car and returns true if the car
// //    is a sports car (i.e. has a horsepower property greater than or equal to 300)

// const car1 = { make: "Porsche", model: "911", horsepower: 450 };
// const car2 = { make: "Toyota", model: "Camry", horsepower: 200 };

// const isSportsCar = (car) =>
//   car.horsepower >= 300
//     ? `${car.make} ${car.model} is a sports car`
//     : `${car.make} ${car.model} is not a sports car`;

// console.log(isSportsCar(car1));
// console.log(isSportsCar(car2));

// // 3. Write a function that takes an object person and a number num
// //    as arguments and returns true if the person's age plus num is greater
// //    than or equal to 21. Otherwise, it should return false.

// const person1 = { name: "Ajay", age: 20 };
// const person2 = { name: "Ajay", age: 10 };

// const isEligible = (person, num) => (person.age + num >= 21 ? true : false);

// console.log(isEligible(person1, 1)); // false
// console.log(isEligible(person2, 2)); // true

// // 4. Write a function that takes an object blog and returns true
// //    if the blog has more than 1000 views (i.e. has a views property greater than 1000)

// const blog1 = {
//   title: "How to Learn JavaScript",
//   author: "John Doe",
//   views: 1430,
// };
// const blog2 = {
//   title: "10 Reasons to Start a Blog",
//   author: "Jane Smith",
//   views: 500,
// };

// const getViews = (blog) => (blog.views > 1000 ? true : false);

// console.log(getViews(blog1)); // true
// console.log(getViews(blog2)); // false

// // 5. Swap the values of two variables using array destructuring.

let a = 1;
let b = 2;

[a, b] = [b, a];

console.log(a)
console.log(b)

// // 6. Convert this function into ES6 with least amount of characters.

// const add = (a = 30, b = 0) => a + b;
// // or
// const sum = (a, b) => (a ?? 30) + (b ?? 0);

// console.log(add(2, 3));
// console.log(add());
// console.log(sum(2, 3));
// console.log(sum());

// // 7. Write an ES6 function combineObjects with least amount
// //    of characters which merges two objects into one.
// const obj1 = { a: 1, b: 2 };
// const obj2 = { c: 3, d: 4 };

// const combineObjects = (obj1, obj2) => ({ ...obj1, ...obj2 });

// const combinedObj = combineObjects(obj1, obj2);
// console.log(combinedObj);
// // Expected Output: {a: 1, b: 2, c: 3, d: 4}

// //8. Convert the function getData, into an ES6 function with last amount of characters.
// //   Hint: Destructuring

// const personDeatils = {
//   name: "John Doe",
//   address: {
//     city: "New York",
//     state: "NY",
//   },
// };

// const getData = ({ name, address: { city } }) => {
//   console.log(name);
//   console.log(city);
// };

// getData(personDeatils);

// // 9. Write a function that takes a string as input
// //    returns the string in all uppercase letters.

// const stringToUpperCase = (str) => str.toUpperCase();

// console.log(stringToUpperCase("hello")); // "HELLO"
// console.log(stringToUpperCase("nikhil")); // "HELLO"
// console.log(stringToUpperCase("ranjan")); // "HELLO"
// console.log(stringToUpperCase("kumar")); // "HELLO"

// // 10. Write a function that takes two strings as input and concatenates them together.

// const concatString = (str1, str2) => `${str1} ${str2}`;

// // or

// const concatenateStrings = (str1, str2, str3) => str1.concat(str2).concat(str3);

// console.log(concatString("hello", "world")); // "helloworld"
// console.log(concatenateStrings("nikhil ", "ranjan ", "kumar")); // "helloworld"

// // 11. Write a function that takes an array and returns the last element in the array.

// const lastElement = (arr) => arr[arr.length - 1];
// // or
// const lastElement1 = (arr) => arr.pop();
// // or
// const lastElement2 = (arr) => arr.slice(-1)[0];
// // or
// const lastElement3 = (arr) => arr.unshift();

// console.log(lastElement([1, 2, 3, 4, 5]));
// console.log(lastElement1([1, 2, 3, 4, 5]));
// console.log(lastElement2([1, 2, 3, 4, 5]));
// console.log(lastElement3([1, 2, 3, 4, 5]));

// // 12. Write a function that takes an array and returns the first element of the array.

// const firstElement = (arr) => arr[0];
// // or
// const firstElement1 = (arr) => arr.shift();
// // or
// const firstElement2 = (arr) => arr.slice()[0];

// console.log(firstElement([1, 2, 3, 4, 5])); // 1
// console.log(firstElement1([1, 2, 3, 4, 5])); // 1
// console.log(firstElement2([1, 2, 3, 4, 5])); // 1

// // 13. Write a function that takes an array and a
// //     number and returns the sum of first element and the number.

// const sumFirstElement = (arr, num) => arr[0] + num;

// console.log(sumFirstElement([1, 2, 3], 5)); // 6

// // 14. Write a function that takes an array and returns the sum of first and last element.

// const sumFirstAndLast = (arr) => arr[0] + arr[arr.length - 1];

// console.log(sumFirstAndLast([1, 2, 3, 4, 8])); // 9

// // 15. Write a function that takes an object representing a
// //     person's information (name, age, occupation) and returns a template
// //     literal that includes the person's name and age in a sentence.

// const personDeatils1 = {
//   name: "John",
//   age: 25,
//   occupation: "Software Engineer",
// };
// const personDeatils2 = { name: "Jane", age: 45, occupation: "Data Analyst" };

// const personInfo = ({ name, age, occupation }) =>
//   `${name} is ${age} year old and he is a ${occupation}`;

// console.log(personInfo(personDeatils1)); // Expected output: "John is 25 years old."
// console.log(personInfo(personDeatils2)); // Expected output: "Jane is 45 years old."
