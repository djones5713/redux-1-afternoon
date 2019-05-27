
import { createStore } from 'redux';

const initalState = {
    name: "",
    category: "",
    auth_first_name: "",
    auth_last_name: "",
    ingredients: [],
    instructions: [],
    recipe: []


};

export const UPDATE_NAME = "UPDATE_NAME";
export const UPDATE_CATEGORY = "UPDATE_CATEGORY";
export const AUTH_FIRST_NAME = "AUTH_FIRST_NAME";
export const AUTH_LAST_NAME= "AUTH_LAST_NAME";
export const ADD_INGREDIENTS = "ADD_INGREDIENTS";
export const ADD_INSTRUCTIONS = "ADD_INSTRUCTIONS";
export const ADD_RECIPE = "ADD_RECIPE";


function reducer(state = initalState, action){
    const { type, payload } = action;
    switch(type){
        case UPDATE_NAME:
            return { ...state, name: payload };

        case UPDATE_CATEGORY:
            return { ...state, category: payload };

        case AUTH_FIRST_NAME:
            return { ...state,  auth_first_name: payload};

        case AUTH_LAST_NAME:    
            return { ...state,  auth_last_name: payload};
        case ADD_INGREDIENTS:
        const newingredients = [...state.ingredients, payload]
            return { ...state, ingredients: newingredients};
        case ADD_INSTRUCTIONS:
        const newinstructions = [...state.instructions, payload]
            return {...state, instructions: newinstructions};
        case ADD_RECIPE:
            const {
              name,
              category,
              authorFirst,
              authorLast,
              ingredients,
              instructions
            } = state;
            const recipe = {
              name,
              category,
              authorFirst,
              authorLast,
              ingredients,
              instructions
            };
            const newRecipes = [...state.recipe, recipe];
            return { ...state, recipe: newRecipes };
        default:
            return state;
    }
}

export default createStore(reducer)