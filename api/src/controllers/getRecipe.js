const { Recipe, Diet } = require("../db");
const axios = require("axios");
require("dotenv").config();
const { API_KEY } = process.env;

const getRecipe = async (req, res) => {
  try {
    const response = await axios(
      `https://api.spoonacular.com/recipes/complexSearch?number=18&apiKey=${API_KEY}&addRecipeInformation=true`
    );
    const { name } = req.query;
    const { results } = response.data;
    const apiRec = results.map((e) => {
      return {
        id: e.id,
        nombre: e.title,
        imagen: e.image,
        resumen: e.summary,
        salud: e.healthScore,
        pasos: e.analyzedInstructions[0]
          ? e.analyzedInstructions[0].steps.map((s) => s.step).join(" ")
          : "",
        dietas: e.diets,
      };
    });
    const dbRec = await Recipe.findAll({
      include: {
        model: Diet,
      },
    }).then((data) =>
      data.map((e) => {
        return {
          id: e.id,
          nombre: e.nombre,
          imagen: e.imagen,
          resumen: e.resumen,
          salud: e.salud,
          pasos: e.pasos,
          dietas: e.diets.map((dieta) => dieta.nombre),
        };
      })
    );

    const recetas = apiRec.concat(dbRec)

    if (name) {
      const filtered = recetas.filter((e) =>
        e.nombre.toLowerCase().includes(name.toLowerCase())
      );
      res.json(200, filtered);
    } else {
      res.json(200, recetas);
    }
  } catch (error) {
    res.json(500, { error: error.message });
  }
};

module.exports = { getRecipe };

