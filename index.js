import express from 'express';
import article from './routes/article.mjs'

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get("/", (req, res) => {
  res.render("index");
})

app.use('/article', article);

app.listen(PORT);
