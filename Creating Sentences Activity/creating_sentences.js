// TODO: Create an array variable called "words" with the following elements: 'This', 'is', 'JavaScript', 'Coding!'
// YOUR CODE GOES HERE
var words = ["This ", "is ", "JavaScript ", "Coding!"]
console.log(words)
// TODO: Create an empty string variable called "sentence".
// YOUR CODE GOES HERE

var sentence = ""


function createSentence(words){

    for (var i = 0; i < words.length; i ++){
      var word = words[i]
      sentence = sentence + word
    }
    return sentence;
  }
  
  console.log(createSentence(words))
// TODO: Call the function "createSentence" using the console.log method.
// YOUR CODE GOES HERE


