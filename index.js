const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
const categories = require("./data/categories.json");
const news = require("./data/news.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send("Dragon is running.....");
});

app.get("/categories", (req, res) => {
  res.send(categories);
});

app.get("/category/:id", (req, res) => {
  const id = parseInt(req.params.id);
  if (id === 8) {
    res.send(news);
  } else {
    const categoryNews = news.filter(
      (singleNews) => parseInt(singleNews.category_id) === id
    );
    res.send(categoryNews);
  }
});

app.get("/news", (req, res) => {
  res.send(news);
});

app.get("/news/:id", (req, res) => {
  const id = req.params.id;
  const specificNews = news.find((singleNews) => singleNews._id === id);
  res.send(specificNews);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
