import { useReducer } from 'react'
import { v4 as uuidv4 } from 'uuid'
import MenuContext from '@/context/menu/menuContext'
import menuReducer from '@/context/menu/menuReducer'
import {
  OPEN_MENU,
  CLOSE_MENU
} from '@/context/types'

const MenuState = props => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: 'Jill Johnson',
        email: 'jill@gmail.com',
        phone: '111-111-1111',
        type: 'personal'
      },
      {
        id: 2,
        name: 'Sara Watson',
        email: 'sara@gmail.com',
        phone: '222-222-2222',
        type: 'personal'
      },
      {
        id: 3,
        name: 'Harry White',
        email: 'harry@gmail.com',
        phone: '333-333-333',
        type: 'professional'
      }
    ],
    current: null,
    filtered: null
  }

  const [state, dispatch] = useReducer(menuReducer, initialState)

  // Add Contact
  const addContact = contact => {
    contact.id = uuidv4()
    dispatch({ type: OPEN_MENU, payload: contact })
  }

  // Delete Contact
  const deleteContact = id => {
    dispatch({ type: CLOSE_MENU, payload: id })
  }

  return (
    <MenuContext.Provider
      value={{
        contacts: state.contacts,
        addContact,
        deleteContact,
      }}>
      {props.children}
    </MenuContext.Provider>
  )
}

export default MenuState