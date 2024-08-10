import express from 'express';
import article from './routes/article.mjs'
import { getArticles, getArticle, postArticle } from './database.js';

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get("/", async (req, res) => {
  const articles = await getArticles();
  let identifiers = [];
  for (let i = 0; i < articles.length; i++){
    identifiers[i] = articles[i].ArticleId.toString();
  }
  res.render("inicio", { articles: articles, identifiers: identifiers });
})

app.use('/article', article);

app.get("/article/:id", async (req, res) => {
  let id = req.params.id;
  const article = await getArticle(id);

  res.send(article);
})

function loadArticles(articles){
  
}

app.listen(PORT);
