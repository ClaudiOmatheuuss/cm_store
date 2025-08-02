const { ifError } = require('assert');
const fs = require('fs');
const path = require('path');

// // criar uma pasta
// fs.mkdir(path.join(__dirname, '/test'), (error) => {
//   if (error) {
//     return console.log(`erro: ${error}`);
//   }
//   console.log("pasta criada com sucesso");
// });


// // criar um arquivo
// fs.writeFile(path.join(__dirname, 'test', 'test.html'), 'Hello Node', (error) => {
//   if (error) {
//     return console.log(`erro: ${error}`);
//   }
//   console.log("arquivo criado com sucesso");
// });

// ler arquivo
fs.readFile(path.join(__dirname, '/test', 'test.html'), 'utf8', (error) => {
  if(error) {
    return console.log(error);
  }
  console.log("arquivo lido com sucesso");
});

