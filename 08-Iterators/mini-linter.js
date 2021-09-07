/* In this project, you will use what you know about iterating over arrays to improve the quality of a paragraph and 
gather some information about that paragraph.

This is the same type of work that word processing software does. Additionally, you may have heard of linting, 
a process by which text is evaluated and improved by an application. In this project, you will create a miniature 
version of a linter using array methods that you have learned. */

// This is a story. We want to gather some information about the individual words and sentences in the string.
let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

// First thing to do is split the string into individual words and save them in a new array called "storyWords".
const storyWords = story.split(' ');

// Logging how many words are there in this story.
console.log(`There are ${storyWords.length} words in this story.`);

// There's this array of words that are unnecessary.
let unnecessaryWords = ['extremely', 'literally', 'actually' ];

// Here I filter the unnecessary words and save the remaining words in an array called "betterWords".
const betterWords = storyWords.filter(word => !unnecessaryWords.includes(word));

// These are words overused in this story.
let overusedWords = ['really', 'very', 'basically'];

// We want to let the user know how many times they have used these words.
let counterOverusedWords = 0;
storyWords.forEach(word => {
  if (overusedWords.includes(word)) {
    counterOverusedWords ++;
  }
  return counterOverusedWords;
});
console.log(`Also, there are some overused words. These words are: ${overusedWords[0]}, ${overusedWords[1]}, ${overusedWords[2]}, and they appear ${counterOverusedWords} times in the text.`);

// Also, we want the user know how many sentences are there in the paragraph. To this, we check if the string ends with "." or "!", so we know that's the end of the sentence.
let counterSentences = 0;
storyWords.filter(word => {
  if (word.endsWith('.') || word.endsWith('!')) {
    counterSentences++;
  }
  return counterSentences;
});
console.log(`In total, there are ${counterSentences} sentences.`);

// Finally, we want to print the version with the better words.
console.log(`Lastly, this is the better version of the text: ${betterWords.join(' ')}`);