const {Recipe} = require ("../db")
const axios = require ("axios")
require("dotenv").config()
const {API_KEY} = process.env

const postRecipe = async(req, res)=>{
    try {
        const {nombre, imagen, resumen, salud, pasos, dietas}=req.body
        const receta= await Recipe.create({
            nombre,
            imagen,
            resumen,
            salud,
            pasos,
            dietas: dietas.map(e=> e.nombre)
        })
        await receta.addDiets(dietas)
        res.json(201, receta)
    } catch (error) {
        res.json(400, {error:error.message})
    }
}

module.exports={postRecipe}