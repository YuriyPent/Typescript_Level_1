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
