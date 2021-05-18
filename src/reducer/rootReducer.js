import * as types from './types'

const initialState = {
  list: [],
  id: 0
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_TO_CART:
      return {
        ...state,
        list: [...state.list, action.payload],
        id: state.id + 1
      }
    case types.REMOVE_FROM_CART:
      return {
        ...state,
        list: state.list.filter(item => item.id !== action.payload.id),
      }
    case types.UPDATE_TO_CART:
      return {
        ...state,
        list: state.list.map(todo => todo.id === action.payload.id ?
          {...todo,
          petName: action.payload.petName,
          breed: action.payload.breed,
          age: action.payload.age,
          description: action.payload.description,
          image: action.payload.image}
          : todo
        )
      }
      case types.DELETE_DATA:
      return {
        list: [],
        id: 0
      }
  }
  return state
}

export default rootReducer