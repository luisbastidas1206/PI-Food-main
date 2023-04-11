const {Recipe, Diet} = require ("../db")

const postRecipe = async(req, res)=>{
    try {
        const {nombre, imagen, resumen, salud, pasos, dietas}=req.body
        const receta= await Recipe.create({
            nombre,
            imagen,
            resumen,
            salud,
            pasos,
        })
        const dietasDB = await Diet.findAll({
            where:{
                nombre:dietas
            }
        })
        await receta.addDiets(dietasDB)
        res.json(201, receta)
    } catch (error) {
        res.json(400, {error:error.message})
    }
}

module.exports={postRecipe}