const { Recipe, Diet } = require("../db");
const axios = require("axios");
require("dotenv").config();
const { API_KEY } = process.env;

const getRecipe = async (req, res) => {
  try {
    const response = await axios(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true`
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
        e.title.toLowerCase().includes(name.toLowerCase())
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

// const { Recipe, Diet } = require("../db.js");
// const axios = require("axios");
// require("dotenv").config();
// const { API_KEY } = process.env;

// const getRecipe = async (req, res) => {
//   try {
//     const response = await axios(
//       `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true`
//     );
//     const { name } = req.query;
//     const {results} = response.data;
//     const apiRecipe = results.map(rec => { //Acá selecciono lo que quiero traerme de la API (Para no traerme toda la información)
//       return {
//         id: rec.id,
//         nombre: rec.title,
//         imagen: rec.image,
//         resumen: rec.summary,
//         salud: rec.healthScore,
//         pasos: rec.analyzedInstructions[0] ? rec.analyzedInstructions[0].steps.map(s => s.step).join(' ') : '',
//         diets: rec.diets
//       }
//     })
//     const dbRecipe = await Recipe.findAll({ //Acá me traigo todas las recetas de la DB con las dietas con las que fueron posteadas
//       include: {
//         model: Diet,
//       }
//     }).then(data => data.map(rec => { //Y acá es cómo las muestro (QUÉ)
//       return {
//         id: rec.id,
//         nombre: rec.nombre,
//         imagen: rec.imagen,
//         resumen: rec.resumen,
//         salud: rec.salud,
//         pasos: rec.pasos,
//         diets: rec.diets.map(diet => diet.name)
//       }
//     }))
//     const finalArray = apiRecipe.concat(dbRecipe); //Este arreglo me permite mostrar todas las recetas, tanto de la api como de la DB
//     if (name) { //Si me llega algo por query, filtro...
//       const filtered = finalArray.filter((e) =>
//         e.title.toLowerCase().includes(name.toLowerCase())
//       );
//       res.status(200).json(filtered); //Y devuelvo lo filtrado
//     } else {
//       res.status(200).json(finalArray); //Si no, simplemente muestro TODAS las recetas
//     }
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// module.exports ={ getRecipe };
