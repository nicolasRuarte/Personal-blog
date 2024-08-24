import express from 'express';
import { postArticle } from '../database.js';
const router = express();

router.use(express.urlencoded());

//Métodos para cada ruta de los artículos
router
  .route("/view/:id")
  .get((req, res) => {
    res.send(`Estás viendo el artículo con ID ${req.params.id}`);
  })

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

router.post("/create", async (req, res) => {
  let author = req.body.autor.trim();
  let title = req.body.titulo.trim();
  let textBody = req.body.cuerpo.trim();

  const article = await postArticle(author, title, textBody);
  
  res.redirect("https://localhost:3000");
})

export default router
