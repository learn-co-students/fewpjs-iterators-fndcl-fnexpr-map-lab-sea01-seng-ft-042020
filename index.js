const tutorials = [
  'what does the this keyword mean?',
  'What is the Contutorialuctor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  return tutorials.map(title =>
  {
   let words = title.split(" ")
    // console.log(words) // words are split on spaces into an array of each title
    let capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1)) // take a word, the first letter of that word and capitalize, then concatenate the rest of the letters of that word after it
    // console.log(capitalizedWords)
    let result = capitalizedWords.join(' ')
    return result
  })
}
