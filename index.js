const express = require("express");
require("dotenv").config();
const systemConfig = require("./config/system");
const database = require('./config/database');
database.connect();

const port = process.env.PORT;
const app = express();
const route = require("./routes/client/index.route");
const routeAdmin = require("./routes/admin/index.route");

app.set("views", "./views");
app.set("view engine", "pug");

//App local variable
app.locals.prefixAdmin = systemConfig.prefixAdmin;


app.use(express.static("public"));
//Routes
route(app);
routeAdmin(app);

app.listen(port, () => {
  console.log(`Example app listening on port: ${port}`);
});
