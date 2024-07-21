import express from 'express';
const router = express();


//Métodos para cada ruta de los artículos
router
  .route("/id=:id")
  .get((req, res) => {
    res.send(`Estás viendo el artículo con ID ${id}`);
  })

router
  .route("/")
  .get((req, res) => {
    res.send("article");
})

router
  .route("/create")
  .get((req, res) => {
    res.render("crear-articulo");
})

export default router
