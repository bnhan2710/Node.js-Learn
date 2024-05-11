const express = require("express");
require("dotenv").config();

const database = require('./config/database');
database.connect();


const port = process.env.PORT;
const app = express();
const route = require("./routes/client/index.route");

app.set("views", "./views");
app.set("view engine", "pug");
app.use(express.static("public"));
//Routes
route(app);

app.listen(port, () => {
  console.log(`Example app listening on port: ${port}`);
});
