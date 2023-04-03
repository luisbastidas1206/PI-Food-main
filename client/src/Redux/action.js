import {
  GET_ALL_RECIPES,
  GET_DETAIL,
  ADD_RECIPE,
  FILTER,
  ORDER,
} from "./action_type";
import axios from "axios";

export function getAllRecipes() {
  return async function (dispatch) {
    try {
      const response = await axios(`http:localhost:3001/recipe`);
      dispatch({
        type: GET_ALL_RECIPES,
        payload: response.data,
      });
    } catch (error) {
      alert("recette introuvable");
    }
  };
}

export function getDetail(idRecipe) {
  return async function (dispatch) {
    try {
      const response = await axios(`http:localhost:3001/recipe/${idRecipe}`);
      dispatch({
        type: GET_DETAIL,
        payload: response.data,
      });
    } catch (error) {
      alert("recette introuvable");
    }
  };
}
//funcio para postear una nueva receta
export function addRecipe(recipe) {
  //se usa un llamado asincrono
  return async function (dispatch) {
    try {
      //se utilisa el metodo .post de axios para postear en la ruta /recipe
      await axios.post("http:localhost:3001/recipe", {
        method: "post",
        headers: { "Content-Type": "application-json" },
        body: JSON.stringify(recipe),
      });
      dispatch({
        type: ADD_RECIPE,
        payload: recipe,
      });
    } catch (error) {
      alert(
        "Hay una serpiente en mi bota, digo digo, impossible de créer la recette"
      );
    }
  };
}

export function filterRecipe(diet) {
  return {
    type: FILTER,
    payload: diet,
  };
}

export function orderRecipes(option) {
  return {
    type: ORDER,
    payload: option,
  };
}
