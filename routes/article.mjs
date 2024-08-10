import express from 'express';
const router = express();

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
    res.render("crear-articulo");
})

export default router
