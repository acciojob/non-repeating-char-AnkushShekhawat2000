// function firstNonRepeatedChar(str) {
//  // Write your code here
// }
// const input = prompt("Enter a string");
// alert(firstNonRepeatedChar(input)); 


function firstNonRepeatedChar(str) {
  const charFrequency = {};

  // Count the frequency of each character
  for (const char of str) {
    charFrequency[char] = (charFrequency[char] || 0) + 1;
  }

  // Find the first character with a frequency of 1
  for (const char of str) {
    if (charFrequency[char] === 1) {
      return char;
    }
  }

  // Return
