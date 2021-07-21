// file system module

const {readFileSync, writeFileSync} = require('fs')

// reading text from two different local files
const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/subfolder/test.txt','utf8')

console.log(first,second)

// creating a new file and writing into it

// writeFileSync('./content/result-sync.txt',`here is the result: ${first},${second}`) 

// this code will create a file and if the file is created then simply override the contents. 

// for appending the content use flag the following

writeFileSync('./content/result-sync.txt',`here is the result ${first},${second}`,{flag:'a'})


