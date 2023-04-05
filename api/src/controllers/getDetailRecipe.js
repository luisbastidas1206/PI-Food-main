const { Recipe } = require("../db");
const axios = require("axios");
require("dotenv").config();
const { API_KEY } = process.env;

const getDetailRecipe = async (req, res) => {
  try {
    const { idRecipe } = req.params;
    const expresionR = /^[0-9]+$/;
    let data;
    if (expresionR.test(idRecipe)) {
      const response = await axios(
        `https://api.spoonacular.com/recipes/${idRecipe}/information?apiKey=${API_KEY}`
      );
    const api = response.data;
    data= {
      id: api.id,
      nombre: api.title,
      imagen: api.image,
      resumen: api.summary,
      salud: api.healthScore,
      pasos: api.instructions,
      dietas: api.diets
    }
    } else {
      data = await Recipe.findByPk(idRecipe);
    }
    res.json(200, data);
  } catch (error) {
    res.json(500, { error: error.message });
  }
};

module.exports = { getDetailRecipe };
