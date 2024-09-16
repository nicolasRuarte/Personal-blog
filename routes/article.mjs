import express from 'express';
import { postArticle, getArticle } from '../database.js';
const router = express();

router.use(express.urlencoded());

//Métodos para cada ruta de los artículos

router
  .route("/")
  .get((req, res) => {
    res.send("article");
})

router
  .route("/create")
  .get((req, res) => {
    res.render("create-article");
})

router.get("article/:id", (req, res) => {
  const id = req.params.id;

  res.render("view-article", {id: id});
})

router.post("/create", async (req, res) => {
  let author = req.body.autor.trim();
  let title = req.body.titulo.trim();
  let textBody = req.body.cuerpo.trim();
  let tags = req.body.tags.trimStart();

  const article = await postArticle(author, title, textBody, tags);
  
  res.redirect("/");
})

export default router
