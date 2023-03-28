const recipeModel = require ("../models/Recipe")
const dietModel = require ("../models/Diet")
const axios = require ("axios")
const { response } = require("express")
require("dotenv").config()
const {API_KEY} = process.env

const getDetailRecipe = (req, res)=>{
    const { idRecipe } = req.params;
    const URL = `https://api.spoonacular.com/recipes/${idRecipe}/information?apiKey=${API_KEY}`
    axios (URL + id).then(
        (response)=>{
            const character = {
                id:response.data.id,
                title:response.data.title,
                image:response.data.image,
                imagetipe:response.data.imagetipe,
                resumen:response.data.resumen,
                salud:response.data.salud,
                pasos:response.data.pasos,
            };
            res.status(200).json(character);
        },
        (error)=> res.status(500).json(error.message)
    )
}

module.exports={getDetailRecipe}