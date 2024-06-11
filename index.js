const express = require('express');
const path = require('path');
const app = express();
const articles = require("./data/db.json");
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.use(express.static(__dirname+'/public'));

app.get("/", (req, res) => {
    res.render("index");
  });

  app.get("/contact", (req, res) => {
    res.render("contact");
  });
  
  app.get("/about", (req, res) => {
    res.render("about");
  });
  app.get("/articles", (req, res) => {
    res.render("articles", { articles });
});

app.get("/articles/:slug", (req, res) => {
    const {slug} = req.params;
    const article = articles.find(article => article.slug === slug)
  
    if(article) {
      res.render("article", { article });
    } else {
      res.render("404");
    }
    
});


app.get("/article/add", (req, res) => {
  res.render("addArticle");
});

app.post("/articles", (req, res) =>{//pour 

})

app.get("/*", (req, res, next) => {
    res.render("404");
});

const port = 3001;

app.listen(port, function () {
    console.log(`l'application ecoute sur le port ${port}`);
    console.log(`l'application est disponible sur http://localhost:${port}`);
});


