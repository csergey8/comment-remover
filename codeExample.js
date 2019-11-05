/* This is example code 
for testing comment remover util 
*/ 
// Single Line Comment
const greeting = name => {
  const greetingWord = 'Hello'; /* Multiline comment */
  const abbr = "Mr."
  console.log(`${greetingWord} ${abbr}${name}`);// Comment ""
  /* 'Multiline'


  "Comment"


  */
}


greeting('Human');