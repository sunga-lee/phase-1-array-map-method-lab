const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
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
  let tutorialsCopy = [];
  let tutorialsSentenceArray = [];
  for (let sentence of tutorials){
    tutorialsSentenceArray.push(sentence.split(/\s+/g));
  }
  tutorialsCopy = tutorialsSentenceArray.map(capitalizeEachWord);
  return tutorialsCopy;
}
function capitalizeEachWord(sentence){
  let capitalizedSentence = "";
  for (let word of sentence){
    capitalizedSentence += word.substring(0, 1).toUpperCase() + word.substring(1) + " ";
  }
  capitalizedSentence = capitalizedSentence.substring(0, capitalizedSentence.length - 1);
  return capitalizedSentence;
}