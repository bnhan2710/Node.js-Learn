const express = require("express");
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/test-product-nodejs-28tech');

const Product = mongoose.model('Product', { 
  title : String, 
  price : Number,
  thumbnail : String
});

const app = express();
const port = 3000;

app.set("views", "./views");
app.set("view engine", "pug");

app.use(express.static('public'))

app.get("/", (req, res) => {
  res.render("index.pug", {
    titlePage: "Home Page",
    message: "This is index page",
  });
});
app.use(express.static('public'));
app.get("/products", async (req,res) => {
  try{
    const products = await Product.find({});
    console.log(products);
    res.render("products.pug", {
      titlePage: "Danh sach san pham",
      products: products
    })
  }catch(err){
    console.log(err);
  }
});

app.get("/contacts", (req, res) => {
  res.render("contact.pug", {
    titlePage: "Contact Page",
    message: "This is contact page",
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
