import {
  OPEN_MENU,
  CLOSE_MENU
} from '@/context/types'

const menuReducer = (state, action) => {
  switch (action.type) {
    case OPEN_MENU:
      return {
        ...state,
        contacts: [...state.contacts, action.payload]
      }
    case CLOSE_MENU:
      return {
        ...state,
        contacts: state.contacts.map(contact =>
          contact.id === action.payload.id ? action.payload : contact
        )
      }
    default:
      return state
  }
}

export default menuReducer 