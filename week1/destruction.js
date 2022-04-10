console.log(x);// result : undefined
var x = 0;
let y = 10;
const z = 11;

//z= 3;
y = 2;
x = 2;

console.log(z);
console.log(y);
console.log(x);

// camelCase <- this is JS convention
// snake_case
// PascalCase

// Arrays 
const newArray = [1, 2, 3];
console.log(newArray[0]);

// Objects OR Dictionaries
// key value pairs
const newDict = { 
    name: 'KC', 
    age: '38',
    array: newArray 
};
console.log(newDict.name);
console.log(newDict['array']);

// Destructuring
const newObj = {
    name: "John", 
    age: 20,
    city: 'New York',
    likes: ['food', 'movies', 'music']
};

const { name, age } = newObj;
const {likes:fav} = newObj; // aliasing
console.log( fav );
console.log(age);


const [firstItem,,lastItem] = fav;
console.log(firstItem);
console.log(lastItem);

const {city, ...others} = newObj;
console.log(others);

const [first, ...rest] = fav;
console.log(first, rest);

// functions and methods
// ES5 syntax
function add(a, b) {
    return a + b;
}
console.log( add(2, 3) );

// ES6 syntax - arrow functions
const sub = (a, b) => {
    return a - b;
}
console.log( sub ( 5, 2) );
// implicit return if the code is 1 line.
const mult = (a, b) => a*b;
console.log( mult (7, 3) );

//callback function ?
// passing a function as a parameter of another funcion 