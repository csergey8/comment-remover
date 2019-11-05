const fs  = require('fs');
const path = require('path');
const fileName = process.argv[2];
const SLASH = 47;
const BACK_SLASH = 92;
const ASTERISK = 42;
const APOSTROPHE = 39;
const GRAVE_ACCENT = 96;
const QUOTATION_MARK = 34;
const LF = 10;
const CR = 13;

if(!fileName) {
  console.log('There is no file to format. Usage: node script.js filename.js');
  return false;
}

const filePath = path.join(__dirname, fileName); 

fs.readFile(filePath, {encoding: 'utf-8'}, (err, data) => {
  if(err) {
    console.log("ENOENT ERROR");
    return false;
  }
  fs.writeFile(path.join(__dirname, `${fileName.substring(0, fileName.length - 3)}--formatted.js`), removeComments(data), (err) => {
    if(err){
      console.log(err)
    }
  })
})

const removeComments = code => {
  let newCode = '';
  for(let i = 0; i < code.length; i++){
    if(code[i].charCodeAt(0) === APOSTROPHE || code[i].charCodeAt(0) === GRAVE_ACCENT || code[i].charCodeAt(0) === QUOTATION_MARK) {
      newCode = newCode.concat(code[i]);
      
      for(let j = i + 1; j < code.length; j++) {
        if(code[j].charCodeAt(0) === code[i].charCodeAt(0) && code[j - 1].charCodeAt(0) !== BACK_SLASH){
          i = j;
          break;
        }
        newCode = newCode.concat(code[j]);
      }
    }
    
    if(code[i].charCodeAt(0) === SLASH && code[i + 1].charCodeAt(0) === SLASH){
      for(let j = i + 2; j < code.length; j++){
        if(code[j].charCodeAt(0) === LF || code[j].charCodeAt(0) === CR){
          i = j;
          break;
        }
      }
    }
    if(code[i].charCodeAt(0) === SLASH && code[i + 1].charCodeAt(0) === ASTERISK){
      for(let j = i + 2; j < code.length; j++){
        if(code[j].charCodeAt(0) === ASTERISK && code[j + 1].charCodeAt(0) === SLASH){
          i = j + 2;
          break;
        }
      }
    }
    newCode = newCode.concat(code[i]);
  }
  return newCode;
}


