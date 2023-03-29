const {Recipe} = require ("../db")
const axios = require ("axios")
require("dotenv").config()
const {API_KEY} = process.env

const postRecipe = async(req, res)=>{
    try {
        const {title, imagen, resumen, salud, pasos}=req.body
        const receta= await Recipe.create({
            title,
            imagen,
            resumen,
            salud,
            pasos
        })
        res.json(201, receta)
    } catch (error) {
        res.json(400, {error:error.message})
    }
}

module.exports={postRecipe}