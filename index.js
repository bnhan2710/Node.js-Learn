const express = require("express");
const app = express();
const port = 3000;

app.set("views", "./views");
app.set("view engine", "pug");

app.use(express.static('public'))

app.get("/", (req, res) => {
  res.render("index.pug", {
    title: "Trang chủ",
    message: "Xin chào các bạn",
  });
});
app.get("/products", (req, res) => {
  res.send("<h1>Huynh Nhu Bao Nhan products!</h1>");
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
