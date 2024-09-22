/**
 * @param {string} s
 * @return {number}
 */

// ---- One Way ------

var firstUniqChar = function (s) {
  let obj = {};
  for (let i = 0; i < s.length; i++) {
    if (obj[s[i]] !== undefined) {
      obj[s[i]] = -1;
    } else {
      obj[s[i]] = i;
    }
  }
  let arr = Object.values(obj).filter((index) => index !== -1);
  return arr.length > 0 ? arr[0] : -1;
};

// ---- Second Way ----

let input1 = "v2tech";
let input2 = "cccabb";
let input3 = "aabb";

console.log(firstUniqChar(input1));
console.log(firstUniqChar(input2));
console.log(firstUniqChar(input3));
