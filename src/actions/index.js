export const ADD_RECIPE = "ADD_RECIPE";
export const REMOVE_FROM_CALENDAR = "REMOVE_FROM_CALENDAR";

export function addRecipe({ day, recipe, meal }) {
  return {
    type: ADD_RECIPE,
    recipe,
    day,
    meal
  };
}

export function removeFromCalendar({ day, meal }) {
  return {
    type: REMOVE_FROM_CALENDAR,
    day,
    meal
  };
}

// function appReducer(state, action) {
//   switch (action.type) {
//     case "DELETE_FLAVOR":
//       return state.filter(obj => obj.flavor !== action.flavor);
//     default:
//       return state;
//   }
// }
