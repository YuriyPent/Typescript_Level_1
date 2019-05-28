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

// Enums

// Numeric Enum
enum Type {
  Video, // 0
  BlogPost, // 1
  Quiz // 2
}

const createContent = (contentType: Type) => {};
createContent(Type.Quiz);

console.log(Type.Quiz);

// String Enum
enum Type2 {
  Video = 'VIDEO',
  BlogPost = 'BLOG_POST', // 1
  Quiz = 'QUIZ' // 2
}

const createContent2 = (contentType: Type2) => {};
createContent2(Type2.Quiz);
// Not going to work
// createContent2('QUIZ');
console.log('Type2.Quiz', Type2.Quiz);

// Classes

class Team {
  teamName: string;
  // public teamName: string; this is same as above
  // private teamName: string; prevents outside usage
  // readonly teamName: string; prevents from being changed

  constructor(teamName) {
    this.teamName = teamName;
  }

  score(): string {
    console.log(this.teamName);
    return 'goal!';
  }
}

const redWings = new Team('Red Wings');
redWings.score();
redWings.teamName;