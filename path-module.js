const path = require('path')

console.log(path.sep);

// to get the true path of the file 

const filePath = path.join('content','subfolder','test.txt')

// to get just the end part or the basename

const base = path.basename(filePath)

console.log(base);

// for absolute path we use path.resolve

const absolute = path.resolve(__dirname,'content','subfolder','test.txt')

console.log(absolute);