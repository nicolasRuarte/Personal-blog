import express from 'express';
const router = express();


//Métodos para cada ruta de los artículos
router
  .route("/:id")
  .get((req, res) => {
    res.send(`Estás viendo el artículo con ID ${id}`);
  })

router
  .route("/")
  .get((req, res) => {
    res.send("");
})

router
  .route("/new")
  .get((req, res) => {
    res.send("Formulario para publicar artículo")
})

export default router
