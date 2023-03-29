const {Recipe}= require ("../db")
const axios = require ("axios")
require("dotenv").config()
const {API_KEY} = process.env


const getRecipe = async(req, res)=>{
    try {
        const response = await axios(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true`)
        const result = response.data.results
        const dbResult = await Recipe.findAll()
        const concatenado = result.concat(dbResult)
        const {name} = req.query
        if (name){
            const filtered= concatenado.filter(e=>e.title.toLowerCase().includes(name.toLowerCase()))
            res.json(200,filtered)
        }else{
            res.json(200, concatenado)
        }
    } catch (error) {
        res.json(500, {error:error.message})
        
    }
}



module.exports={getRecipe}