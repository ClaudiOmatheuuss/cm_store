const express = require("express");
const ProductModel = require("../src/models/product.model");
const app = express();

app.use(express.json());

app.set("view engine", 'ejs');
app.set("views", "src/views");

app.get('/views/products', async (req, res) => {
  const products = await ProductModel.find({});
  res.render("index", { products });
})

app.use((req, res, next) => {
  console.log(`Request Type: ${req.method}`);
  console.log(`Date: ${new Date()}`);


  next();
})

app.get("/home", (req, res) => {
  res.contentType("application/html");
  res.status(200).send("<h1>Hello World</h1>");
});

app.get("/products", async (req, res) => {
  try {
    const products = await ProductModel.find({});

    res.status(200).json(products);
  } catch (error) {
    return res.status(500).send(error.message);
  }
})

app.get('/products/:id', async (req, res) => {
  try {
    const id = req.params.id;

    const product = await ProductModel.findById(id);

    return res.status(200).json(product);
  } catch (error) {
    return res.status(500).send(error.message);
  }
})

app.post('/products', async (req, res) => {
  try {
    const product = await ProductModel.create(req.body);
    res.status(201).json(product);
  } catch (error) {
    res.status(500).send(error.message);
  }
})

app.patch("/products/:id", async (req, res) => {
  try {
    const id = req.params.id;

    const product = await ProductModel.findByIdAndUpdate(id, req.body, { new: true });

    res.status(200).json(product)
  } catch (error) {
    res.status(500).send(error.message);
  }
})

app.delete("/products/:id", async (req, res) => {
  try {
    const id = req.params.id;

    const product = await ProductModel.findByIdAndDelete(id, req.body);

    res.status(200).json(product)
  } catch (error) {
    res.status(500).send(error.message);
  }
})

const port = 8080;

app.listen(port, () => console.log(`listening at ${port} port`));