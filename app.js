const express = require("express");
const app = express();
const port = 3000;
const exphbs = require("express-handlebars");
const restaurantList = require("./restaurant.json");

// setting template engine
app.engine("handlebars", exphbs.engine({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// setting static files
app.use(express.static("public"));

// show one restaurant and its info
app.get("/restaurants/:id", (req, res) => {
  const { id } = req.params;
  const restaurant = restaurantList.results.find(
    (restaurant) => restaurant.id.toString() === id
  );
  res.render("show", { restaurant });
});

// index page to view all restaurants
app.get("/", (req, res) => {
  res.render("index", { restaurants: restaurantList.results });
});

app.listen(port, () => {
  console.log(`Listening to http://localhost${port}`);
});
