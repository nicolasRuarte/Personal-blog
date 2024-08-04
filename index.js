import express from 'express';
import article from './routes/article.mjs'
import { getArticles, getArticle, postArticle } from './database.js';

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get("/", (req, res) => {
  res.render("index");
})

app.use('/article', article);

app.get("/article/:id", async (req, res) => {
  let id = req.params.id;
  const article = await getArticle(id);

  res.send(article);
})

app.listen(PORT);
