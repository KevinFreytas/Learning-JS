// This variable will contain the text you want to translate into "whale talk".
let input = 'The northearn lights are wonderful!'.toUpperCase();

// Array of vowels to be extracted from the input variable.
const vowels = ['A', 'E', 'I', 'O', 'U'];

// This will serve as a place to store the vowels from the input string.
let resultArray = [];

// This outer loop iterates through each letter of the input variable text.
for (let i = 0; i < input.length; i++) {
  // This inner loop iterates through each vowel.
  for (let j = 0; j < vowels.length; j++) {
    // This if statement compares the input letter to every letter in the vowels array.
    if (input[i] === vowels[j]) {
      resultArray.push(input[i]);
    }
  }
  // This checks if each letter in the input string is equal to 'e' or 'u'. If so, it's doubled.
  if (input[i] === 'E' || input[i] === 'U') {
    resultArray.push(input[i]);
  }
}
// Here we log the array. As the output has commas between each letter, we can use the method .join('') to take out these commas.
console.log(resultArray.join(''));

