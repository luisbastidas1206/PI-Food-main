const recipeModel = require ("../models/Recipe")
const dietModel = require ("../models/Diet")
const axios = require ("axios")
require("dotenv").config()
const {API_KEY} = process.env

const getRecipeName = async(req, res)=>{}

const getAllRecipes = async(req, res)=>{}

module.exports={getRecipeName, getAllRecipes}