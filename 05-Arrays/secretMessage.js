// This is the array containing the secret message to be manipulated.
let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 
'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

// Removes and store the last string of the array.
let deletedWord = secretMessage.pop();

// Adds the word 'to' and 'Program' to the end of the array.
secretMessage.push('to', 'Program');

// Changes the word 'easily' to the word 'right'
for (let i = 0; i < secretMessage.length; i++) {
  if (secretMessage[i] === 'easily') {
    secretMessage[i] = 'right';
  }
}

// Removes the first string of the array.
secretMessage.shift();

// Adds the word 'Programming' to the beginning of the array.
secretMessage.unshift('Programming');

// Removes the string 'get, 'right', 'the, 'first, 'time', and replace them with the single string 'know'.
secretMessage.splice(6, 5, 'know');

// Prints the secret message as a sentence!
console.log(secretMessage.join(' '));
