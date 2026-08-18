// Products api

const express = require("express");

const app = express();
app.use(express.json());

const port = 3000;
const products = [
  {
    id: 1,
    name: "Keyboard",
    price: 1200,
    category: "electronics",
  },
];
// GET    /
app.get("/", (req, res) => {
  res.send("Product api is running");
});

// GET    /products
app.get("/products", (req, res) => {
  res.send(products);
});

// GET    /products/:id
app.get("/products/:id", (req, res) => {
  const id = Number(req.params.id);
  const product = products.find((product) => product.id === id);
  if (product) {
    res.send(product);
  } else {
    res.send({
      message: "Product not found",
    });
  }
});

// POST   /products
app.post("/products", (req, res) => {
  const newProduct = {
    id: products.length + 1,
    name: req.body.name,
    price: req.body.price,
    category: req.body.category,
  };
  products.push(newProduct);
  res.send(newProduct);
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
