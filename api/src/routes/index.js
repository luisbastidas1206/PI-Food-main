const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { getDetailRecipe } = require("../controllers/getDetailRecipe");
const { getDiets } = require("../controllers/getDiets");
const { getRecipeName } = require("../controllers/getRecipeName");
const { postRecipe } = require("../controllers/postRecipes");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/name", getRecipeName);
router.get("/:idRecipe", getDetailRecipe);
router.get("/", getDiets);
router.post("/", postRecipe);

module.exports = router;
