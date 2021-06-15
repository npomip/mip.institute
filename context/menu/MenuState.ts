import { useReducer } from 'react'
import { v4 as uuidv4 } from 'uuid'
import MenuContext from '@/context/menu/menuContext'
import menuReducer from '@/context/menu/menuReducer'
import { MENU_TEST } from '@/context/types'

const MenuState = props => {
  const initialState = {
    menuTests: [
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
    ]
  }

  const [state, dispatch] = useReducer(menuReducer, initialState)

  // Add Contact

  // Delete Contact

  // Set Current Contact

  // Clear Current Contact

  // Update Contact

  // Filter Contacts

  // Clear Filter

  return (
    <MenuContext.Provider
      value={{
        menuTests: state.menuTests
      }}>
      {props.children}
    </MenuContext.Provider>
  )
}

export default MenuState
