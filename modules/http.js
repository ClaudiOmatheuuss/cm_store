const http = require('http');

const port = 8080;

const server = http.createServer((req, res) => {
  if(req.url === "/home") {
    res.writeHead(200, {'content-type': 'text/html'});
    res.end("<h1>home page</h1>")
  }
  
  if (req.url === "/products") {
    const products = [
      {
        name: "P9 top headphone",
        price: "60.00",
        type: "eletronics"
      },
      {
        name: "Arduino Uno",
        price: "35.00",
        type: "eletronics"
      },
      {
        name: "magnetic support",
        price: "25.00",
        type: "utility"
      }
    ]

    res.writeHead(200, {'content-type': 'application/json'});
    res.end(JSON.stringify(products));
  }
})

server.listen(port, () => console.log(`listening at ${port} port.`));