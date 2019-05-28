// Functions in TypeScript

const sayWord = (word: string): string => {
  console.log(word);
  return word;
};

sayWord('Scott');

// ? for optional params
// const sayWord = (word?: string): string => {
//   console.log(word || 'Hello');
//   return word || 'Hello';
// };

// sayWord();
// Default params
// Rest params work as expected
const sayWords = (word = 'Hello', ...otherStuff: string[]): string => {
  console.log(otherStuff);
  return word;
};

sayWords('Scott', 'Wes');

// Implicit Types in TS
let newName:string | number | boolean = 'Scott';
newName = 'Wes';
newName = 10;
console.log(newName);

// Gets type from initial declaration
let newNameTwo = newName;
newNameTwo = 10;

//  Union Types with |
const makeMargin = (x: string | number): string => {
  return `margin: ${x}px;`;
};

makeMargin(10);
makeMargin('10');
// makeMargin(false);

// Null Types
let dog: string | undefined = 'Sammy';
dog = null;
console.log('dog', dog);
dog = 'Lucie';
dog = undefined;

// Interfaces
interface Person {
  name: string;
  age?: number; // ? Optional param
}

const sayName = ({ name, age }: Person): string => {
  console.log(name);
  return name;
};

// This works too!
// const sayName = ({ name, age }: Person): Person => {
//   console.log(name);
//   return { name, age };
// };

sayName({
  name: 'Scott'
});

sayName({
  age: 32,
  name: 'Scott'
});