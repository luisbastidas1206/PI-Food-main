import {
  ADD_RECIPE,
  GET_ALL_RECIPES,
  GET_DETAIL,
  FILTER,
  ORDER,
} from "./action_type";

const initialState={
    myRecipes:[],
    detail:{},
}

const reducer = (state=initialState, {type, payload}) => {
    switch (type) {
        case ADD_RECIPE:
            return{
                ...state,
                myRecipes: [...state.myRecipes, payload]
            }

        case GET_ALL_RECIPES:
            return{
                ...state,
                myRecipes: payload
            }

        case GET_DETAIL:
            return{
                ...state,
                detail:payload
            }

        case FILTER:
            const filtered= state.myRecipes.filter(e=> e.diets===payload)
            return{
                ...state,
                myRecipes: filtered 
            }

        case ORDER:
            return{
                ...state,//Hernan cada , me recuerda a ti
                myRecipes:
                payload === "Ascendente" ? state.myRecipes.sort((a,b)=> a-b): state.myRecipes.sort((a,b)=> b-a)
            }
            
    
        default:
            return {...state};
    }
};

export default reducer;
