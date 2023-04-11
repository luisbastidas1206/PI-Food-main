import {
  GET_ALL_RECIPES,
  ADD_RECIPE,
  GET_DETAIL,
  FILTER_DIETS,
  ORDER_ABC,
  FILTER_ORIGIN,
  ORDER_SALUD,
  GET_QUERY_RECIPE,
  GET_DIET,
} from "./action_type";
import axios from "axios";

export function getAllRecipes() {
  return async function (dispatch) {
    try {
      const response = await axios(`http://localhost:3001/recipe`);

      dispatch({
        type: GET_ALL_RECIPES,
        payload: response.data,
      });
    } catch (error) {
    }
  };
}

export function getQueryRecipe(name){
  return async function(dispatch){
    try {
      const response= await axios (`http://localhost:3001/recipe?name=${name}`)
      dispatch({
        type:GET_ALL_RECIPES,
        payload:response.data,
      })
    } catch (error) {
      alert ("tu as bien mis le nom ?")
    }
  }
}

export function getDetail(idRecipe) {
  return async function (dispatch) {
    try {
      const response = await axios(`http://localhost:3001/recipe/${idRecipe}`);
      dispatch({
        type: GET_DETAIL,
        payload: response.data,
      });
    } catch (error) {
      alert("recette introuvable");
    }
  };
}

export function getDiet(){
  return async function(dispatch){
    try {
      const response = await axios (`http://localhost:3001/diets`)
      dispatch({
        type:GET_DIET,
        payload:response.data,
      })
    } catch (error) {
      alert ("il n'y a pas de régimes dans votre base de données")
    }
  }
}

//funcio para postear una nueva receta
export function addRecipe(recipe) {
  //se usa un llamado asincrono
  return async function (dispatch) {

    try {
      //se utilisa el metodo .post de axios para postear en la ruta /recipe
      const url = `http://localhost:3001/recipe`
      const response = await axios.post(url, recipe);
      console.log(response)
      return dispatch({
        type: ADD_RECIPE,
        payload: response.data,
      });
    } catch (error) {
      alert(
        "Hay una serpiente en mi bota, digo digo, impossible de créer la recette"
      );
    }
  };
}

export function filterDiet(diet) {
  return {
    type: FILTER_DIETS,
    payload: diet,
  };
}

export function orderABC(option) {
  return {
    type: ORDER_ABC,
    payload: option,
  };
}

export function orderSalud(points){
  return{
    type:ORDER_SALUD,
    payload:points
  }
}

export function filterOrigin(origin){
  return{
    type:FILTER_ORIGIN,
    payload:origin
  }
}
