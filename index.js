// Q 1. First Repeating Character
// Given a string, find the first repeating character. If no
// repeating characters then return -1.

// Example 1:
// Input: s = “abbacddac”
// Output: ‘a’

// Example 2:
// Input: s = “xyzzoy”
// Output: ‘y’
function firstRepeatingCharacter(s) {
  // Create a Map to store characters we've seen and their indices
  const seen = new Map();

  // Variable to keep track of the earliest repeat
  let earliestRepeatIndex = Infinity;
  let firstRepeat = -1;

  // Iterate through the string
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (seen.has(char)) {
      // If we've seen this character before and it's earlier than our current earliest
      if (seen.get(char) < earliestRepeatIndex) {
        earliestRepeatIndex = seen.get(char);
        firstRepeat = char;
      }
    } else {
      // If we haven't seen it, add it to the map with its index
      seen.set(char, i);
    }
  }

  // Return the first repeating character or -1 if none found
  return firstRepeat;
}

// Test cases
console.log(firstRepeatingCharacter("abbacddac")); // Should output 'a'
console.log(firstRepeatingCharacter("xyzzoy")); // Should output 'y'
console.log(firstRepeatingCharacter("abcdef")); // Should output -1
