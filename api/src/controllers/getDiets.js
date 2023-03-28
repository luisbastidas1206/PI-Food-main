const recipeModel = require ("../models/Recipe")
const dietModel = require ("../models/Diet")
const axios = require ("axios")
require("dotenv").config()
const {API_KEY} = process.env

const getDiets = async(req, res)=>{}

module.exports={getDiets}