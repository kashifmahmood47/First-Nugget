const fs = require("fs")

//read file sync
const a = fs.readFileSync('file1.txt')
console.log(a.toString())

//writefile
// fs.writeFile('file2.txt', 'This is file2', ()=>{
//     console.log("Following content is Written to the file")
//     const a3 = fs.readFileSync('file2.txt')
//     console.log(a3.toString())

// });

//write file sync
const a2 = fs.writeFileSync('file2.txt', 'This is writefilesync')
const a3 = fs.readFileSync('file2.txt')
console.log(a3.toString())
