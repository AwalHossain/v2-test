// Q 1. First Repeating Character
// Given a string, find the first repeating character. If no
// repeating characters then return -1.

// Example 1:
// Input: s = “abbacddac”
// Output: ‘a’

// Example 2:
// Input: s = “xyzzoy”
// Output: ‘y’

function repeating(char) {
  let newChar = char.split("");
  newChar.sort();
  console.log(newChar, "check");
  let hash = new Map();
  for (let i = 0; i < newChar.length; i++) {
    console.log(newChar[i]);

    if (hash.has(newChar[i])) {
      //   console.log(hash.get(newChar[i]), "here");
      return newChar[hash.get(newChar[i])];
    }
    hash.set(newChar[i], i);
  }
}

console.log(repeating("xyzzoy"));
