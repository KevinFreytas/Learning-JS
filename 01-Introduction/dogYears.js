// This constant is the user's age.
const myAge = 75;

// This indicates the dog years that have a different multiplier.
let earlyYears = 2;
earlyYears *= 10.5;

// As we already counted the 2 early years of a dog's life, we can subtract this from the user's age.
let laterYears = myAge - 2;

// The later years of a dog's life converted to a human's life is like we're multiplying by 4.
laterYears *= 4;

// This joins the early years with the later years, resulting in the final age.
let myAgeInDogYears = earlyYears + laterYears;

// This saves the users' name into a variable.
const myName = 'Maria da Luz';

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);




