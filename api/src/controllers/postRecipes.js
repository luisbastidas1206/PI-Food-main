const recipeModel = require ("../models/Recipe")
const dietModel = require ("../models/Diet")
const axios = require ("axios")
require("dotenv").config()
const {API_KEY} = process.env

const postRecipe = async(req, res)=>{}

module.exports={postRecipe}