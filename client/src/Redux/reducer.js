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

const initialState = {
  filterRecipes: [],
  // queryRecipes: [],
  myRecipes: [],
  detail: {},
  diets: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_RECIPE:
      return {
        ...state,
        myRecipes: [...state.myRecipes, payload],
      };

    case GET_ALL_RECIPES:
      return {
        ...state,
        myRecipes: payload,
      };
    case GET_DETAIL:
      return {
        ...state,
        detail: payload,
      };

    case FILTER_DIETS:
      const filtered = state.myRecipes.filter((e) => e.diets === payload);
      return {
        ...state,
        filterRecipes: filtered,
      };

    case ORDER_ABC:
      return {
        ...state, //Hernan cada "," me recuerda a ti
        myRecipes:
          payload === "Ascendente"
            ? state.myRecipes.sort((a, b) => a.name - b.name)
            : state.myRecipes.sort((a, b) => b.name - a.name), // si da errror probar ponerlo en español
      };

    case ORDER_SALUD:
        return {
            ...state, //Hernan cada "," me recuerda a ti
            myRecipes:
              payload === "saludOrdenada"
                ? state.myRecipes.sort((a, b) => a.healthScore - b.healthScore)
                : state.myRecipes.sort((a, b) => b.healthScore - a.healthScore), // si da errror probar ponerlo en español
          };

    case GET_QUERY_RECIPE:
      return {
        ...state,
        myRecipes: payload,
      };

    case GET_DIET:
      return {
        ...state,
        diets: payload,
      };

    case FILTER_ORIGIN:
      const filtro = state.myRecipes.filter((e) => {
        if (payload === "Api" && typeof id === "number") {
          return true;
        } else if (payload === "DataBase" && typeof id === "string") {
          return true;
        } else {
          return false;
        }
      });
      return {
        ...state,
        filterRecipes: filtro,
      };

    default:
      return { ...state };
  }
};

export default reducer;
