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
      data = response.data;
    } else {
      data = await Recipe.findByPk(idRecipe);
    }
    res.json(200, data);
  } catch (error) {
    res.json(500, { error: error.message });
  }
};

module.exports = { getDetailRecipe };
