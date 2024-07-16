import express from 'express';
import article from './routes/article.mjs'

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.set(express.static('./public'));

app.listen(PORT);

app.get("/", (req, res) => {
  res.render("index", {bienvenida: "¡Bienvenido usuario!"})
})

app.use('/article', article);

console.log(express.static);
