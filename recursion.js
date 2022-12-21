/** product: calculate the product of an array of numbers. */

function product(nums) {
  // loop through nums. If array - send back thru product
  // otherwise multiply single values together and return val
  let total = 1;

  for(n of nums){
    // static method checks if passed in vals is an array
    if(Array.isArray(n)){
      product(n)
    } else {
      total *= n;
    }
  }
  return total;
};

// to optimize runtime you can keep track of index instead.
// this leaves multiple open stacks increases index by one each time.

// function product(nums, idx = 0) {
//   // on inital run- if there is nothing is nums, return 1
//   if(nums.length === idx) return 1;
//   return nums[idx] * product(nums , idx+1);
// }

/** longest: return the length of the longest word in an array of words. */

function longest(words, index = 0) {
  if(words.length === index) return 0;
  let longestCount = 1;

  for(w of words){
    if(Array.isArray(w)){
      longest(w);
    } else {
      let wordLength = w.length;

      if(wordLength > longestCount){
        longestCount = wordLength
      }
    }
  }
  return longestCount;
}

/** everyOther: return a string with every other letter. */

// function everyOther(str, index = 0) {
//   if(str === index) return 0;
//   let returnStatement = "";

//   if(str.length === 2 ){
//     return str[0];
//   };

//   // only less than str.length bc we loop by 2 index's at a time to get every other.
//   for(let i = 0; i < str.length; i += 2){
//       returnStatement = returnStatement + str[i];
//   };

//   return returnStatement;
// }

function everyOther(str, idx = 0, newStr = "") {
  if (idx >= str.length) return newStr;
  newStr += str[idx];

  // this line is essentially the loop above, we're going up by 2 to get every other word.
  return everyOther(str, idx + 2, newStr);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

// function isPalindrome(str) {
//   let reversedString = "";

//   // start from the back & create a new sentence
//   for(let i = str.length -1; i >= 0; i--){
//     reversedString = reversedString + str[i];
//   };

//   if(reversedString === str){
//     return true;
//   } else {
//     return false;
//   }
// }

// in a palindrome the words on opposite ends should match. Each time we move indexes and comapre the string values.
function isPalindrome(str, left = 0, right = str.length-1){
  // create cases for return
  if(str[left] !== str[right]) return false;
  if(str[left] === str[right]) return true;

  // create loop
  return isPalindrome(str, left+1, right-1)

}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, index = 0, searchLength = arr.length-1) {
  if(arr[index] === val){
    return index;
  };

  // if we've looped through the full arr and there's no match return -1
  if(index >= searchLength){
    return -1;
  }

  return findIndex(arr, val, index+1, searchLength);
};

/** revString: return a copy of a string, but in reverse. */

function revString(str, reversedStr = "", index = str.length-1) {
  // if(index === -1) return reversedStr;
  if(reversedStr.length === str.length) return reversedStr;
  reversedStr = reversedStr + str[index];
  return revString(str, reversedStr, index-1);
};

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let stringArr = [];
  // for IN**, loops through the object. Stops when there's nothing left in obj.
  for (let key in obj) {
    // console.log("the key is", key)

    // obj[key] evaluates to the VALUE. Comapre value against type of string.
    if (typeof obj[key] === "string"){
      stringArr.push(obj[key]);
      console.log("pushed 1", obj[key])
    }

    // ** Note: if the value is not a string nothing is done.

    // if it's a nested obj, push the object alone back in to obj input for evaluation
    if (typeof obj[key] === "object") {
      stringArr.push(...gatherStrings(obj[key]));
      console.log("pushed 2")
    }
  }
  return stringArr;
};


/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {

}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
