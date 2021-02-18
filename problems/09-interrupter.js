/***********************************************************************
Write a function named: interrupter(interruptingWord). The interrupter function will
accept a word and return a function. When the function returned by interrupter
is invoked with a string the string will be returned with "interruptions".

Look below to see how this function is invoked:
let rudePerson = interrupter("what"); // => returns a function
console.log(rudePerson("how are you")); // prints "how what are what you"
console.log(rudePerson("I like pie")); // prints "I what like what pie"


Invoking the interrupter function again: 
let rudePerson2 = interrupter("yo"); // => returns a function
console.log(rudePerson2("I love dogs")); // prints "I yo love yo dogs"


***********************************************************************/
// create the function
// return function
// returner function should return "interruptions".
// let varName = interrupter = interruptingWord => {
//   //let joinSentence = '';
//   return function (sentence) {
//     words = sentence.split(' ');
//     let newArray = [];
//     for (let i = 0; i < words.length; i++) {
//       let currentElement = words[i];
//       if (i === words.length - 1) {
//         //let firstSentence = currentElement + " ";
//         newArray.push(currentElement)
//       } else {
//       let newSentence = currentElement + " " + interruptingWord + " ";
//       newArray.push(newSentence)
//       //newArray.pop()
//       //newArray.slice(0, -1)
//       //console.log(newArray);
//       //joinSentence = newArray.join(" ");
//       }
//     }
    
//     return newArray.join(' ');
//   }
// }

let varName = interrupter = interruptingWord => {
  //let joinSentence = '';
  return function (sentence) {
    words = sentence.split(' ');
    let newSentence = '';
    for (let i = 0; i < words.length; i++) {
      let currentElement = words[i];
      if (i === words.length - 1) {
        //let firstSentence = currentElement + " ";
        //newArray.push(currentElement)
        newSentence += currentElement;
      } else {
        newSentence += currentElement + " " + interruptingWord + " "
      // let newSentence = currentElement + " " + interruptingWord + " ";
      // newArray.push(newSentence)
      //newArray.pop()
      //newArray.slice(0, -1)
      //console.log(newArray);
      //joinSentence = newArray.join(" ");
      }
    }
    
    return newSentence;
  }
}

// let rudePerson = interrupter("what"); // => returns a function
// console.log(rudePerson("how are you")); // prints "how what are what you"
// console.log(rudePerson("I like pie")); // prints "I what like what pie"


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = interrupter;
} catch (e) {
  // catch the ref err
  module.exports = null;
}
