/* This is example code 
for testing comment remover util 
*/ 
// Single Line Comment
const greeting = name => {
  const greetingWord = 'Hello'; /* \\Multiline comment// */
  const abbr = "Mr."
  const word = 'I\'am'
  console.log(`${greetingWord}, ${word} ${abbr}${name}`);// Comment ""
  /* \\//'Multiline'

  
  "Comment"


  */
} ////Comment


greeting('John');