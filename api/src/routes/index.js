const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { getDetailRecipe } = require("../controllers/getDetailRecipe");
const { getRecipe,  } = require("../controllers/getRecipe");
const { postRecipe } = require("../controllers/postRecipes");
const { dietControl } = require("../controllers/getDiets");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/recipe", getRecipe);
router.get("/recipe/:idRecipe", getDetailRecipe);
router.post("/recipe", postRecipe);
router.post("/diets", dietControl);

module.exports = router;
