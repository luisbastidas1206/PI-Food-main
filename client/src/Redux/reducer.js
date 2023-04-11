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
        filterRecipes: [...state.filterRecipes, payload]
      };

    case GET_ALL_RECIPES:
      return {
        ...state,
        myRecipes: payload,
        filterRecipes: payload,
      };
    case GET_DETAIL:
      return {
        ...state,
        detail: payload,
      };

      case GET_DIET:
        return {
          ...state,
          diets: payload,
        };
      
    case FILTER_DIETS:
      const filtered = state.filterRecipes.filter((recipe) =>
      recipe.dietas.map((r) => r.nombre).includes(payload));
      
      
      return {
        ...state,
        myRecipes: filtered,
      };
      

    case ORDER_ABC:
      return {
        ...state, //Hernan cada "," me recuerda a ti
        myRecipes:
          payload === "a-z"
            ? state.myRecipes.sort((a, b) => a.nombre.localeCompare(b.nombre) )
            : state.myRecipes.sort((a, b) => b.nombre.localeCompare(a.nombre) ), // si da errror probar ponerlo en español
      };

    case ORDER_SALUD:
        return {
            ...state, //Hernan cada "," me recuerda a ti
            myRecipes:
              payload === "ascendente"
                ? state.myRecipes.sort((a, b) => a.salud < b.salud ? -1: 1)
                : state.myRecipes.sort((a, b) => a.salud > b.salud ? -1: 1), // si da errror probar ponerlo en español
          };

    case GET_QUERY_RECIPE:
      return {
        ...state,
        filterRecipes: payload
      };


    case FILTER_ORIGIN:
      const filtro = state.filterRecipes.filter((e) => {
        if (payload === "Api" && typeof e.id === "number") {
          return true;
        } else if (payload === "DataBase" && typeof e.id === "string") {
          return true;
        } else {
          return false;
        }
      });
      return {
        ...state,
        myRecipes: filtro,
      };

      case "DELETE_FILTERS":
      return{
        ...state,
        myRecipes: state.filterRecipes
      }

    default:
      return { ...state };
  }
};

export default reducer;
