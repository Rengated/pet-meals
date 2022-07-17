 

const initialState = {
    ids: Object.keys(localStorage),
    
}

export const mealCartReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        if (!state.ids.includes(action.payload)){
        return {...state, ids: [...state.ids, action.payload ] }}
      case 'DELETE_FROM_CART':
        return {...state, ids: [...state.ids].filter(value => value!==action.payload)}
      default:
        return state
    }
  }
  