const initialState = {
    ids: Object.keys(localStorage),
    
}

export const mealCartReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        return {...state, ids: [...state.ids, action.payload ] }
      default:
        return state
    }
  }
  