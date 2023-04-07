const { Diet } = require("../db");
const axios = require("axios");
require("dotenv").config();
const { API_KEY } = process.env;

const getDiets = async () => {
  try {
    let arr = [];
    const response = await axios(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true`
    );
    const diet = response.data.results.map((e) => e.diets);
    for (let i = 0; i < diet.length; i++) {
      for (let j = 0; j < diet[i].length; j++) {
        if (!arr.includes(diet[i][j])) {
          arr.push(diet[i][j]);
        }
      }
    }
    await Diet.bulkCreate(
      arr.map((e) => {
        return {
          nombre: e,
        };
      }),
      {
        ignoreDuplicates: true, // según san google esta linea es para que ignore las dietas que ya estan en base de datos, si intenta agregar una no lo hará
      }
    );
    const dbDiets = await Diet.findAll();
    return dbDiets
  } catch (error) {
    return error.message;
  }
};

const dietControl= async (req, res) =>{
    try {
        const response = await getDiets()
        res.json(200, response)
    } catch (error) {
        res.json(400 , {error:error.message})
    }
} 

module.exports = { getDiets, dietControl};
