import express from 'express';
import article from './routes/article.mjs';
import { getArticles, getArticle, postArticle } from './database.js';

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use('/article', article);

function addHashtags (tags){
  let hashtags = tags.split(" ");

  for (let i = 0; i < hashtags.length; i++){
    hashtags[i] = "#" + hashtags[i];
  }

  return hashtags.join(" ");
}

app.get("/", async (req, res) => {
  const articles = await getArticles();
  let identifiers = [];

  for (let i = 0; i < articles.length; i++){
    identifiers[i] = articles[i].ArticleId.toString();
  }

  res.status(200).render("inicio", { articles: articles, identifiers: identifiers });
});


app.get("/article/:id", async (req, res) => {
  const id = req.params.id;

  const article = await getArticle(id);
  console.log(article);
  
  res.status(200).render("view-article",
    {
      title: article.Title,
      tags: addHashtags(article.Tags),
      author: article.Author,
      textBody: article.TextBody
    })
})

app.post('/article/create', (req, res) => {
  
  res.status(200).send("Post request");
})

app.listen(PORT);