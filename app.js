const express = require("express");
const app = express();
const port = 3000;
const exphbs = require("express-handlebars");

// setting template engine
app.engine("handlebars", exphbs.engine({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// setting static files
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(port, () => {
  console.log(`Listening to http://localhost${port}`);
});
