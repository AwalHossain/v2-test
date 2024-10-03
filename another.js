// Q 2. First Non-repeating Character
// Given a string s, find the first non-repeating character in it and
// return its index. If it does not exist, return -1.
// Example 1:
// Input: s = "v2tech"
// Output: 0

// Example 2:
// Input: s = "cccabb"
// Output: 3

// Example 3:
// Input: s = "aabb"
// Output: -1

function nonRepeating(s) {
  let char = s.split("");
  console.log(char, "checking");
  let obj = {};
  for (let i = 0; i < char.length; i++) {
    if (obj[char[i]]) {
      obj[char[i]] = "already";
    } else {
      obj[char[i]] = i;
    }
    console.log(obj, "ch3");
  }
  return 0;
}

let input = "aabb";

console.log(nonRepeating(input));
