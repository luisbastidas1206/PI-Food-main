const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { getDetailRecipe } = require("../controllers/getDetailRecipe");
const { getDiets } = require("../controllers/getDiets");
const { getRecipe,  } = require("../controllers/getRecipe");
const { postRecipe } = require("../controllers/postRecipes");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/recipe", getRecipe);
router.get("/recipe/:idRecipe", getDetailRecipe);
router.get("/diets", getDiets);
router.post("/recipe", postRecipe);

module.exports = router;
