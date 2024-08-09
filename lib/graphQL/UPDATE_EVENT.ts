import { gql } from '@apollo/client'

const UPDATE_EVENT = gql`
  mutation UpdateEvent($input: updateEventInput!) {
    updateEvent(input: $input) {
      event {
        tickets_quantity
      }
    }
  }
`

export default UPDATE_EVENT