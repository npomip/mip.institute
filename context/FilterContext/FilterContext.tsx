import { createContext, useContext, useReducer } from 'react'

const FilterContext = createContext(null)
const FilterDispatchContext = createContext(null)

export function FilterProvider({ children, items }) {
  const initialFilters = { bool: false }
  const [state, dispatch] = useReducer(filtersReducer, {
    filters: initialFilters,
    items: items
  })

  return (
    <FilterContext.Provider value={state}>
      <FilterDispatchContext.Provider value={dispatch}>
        {children}
      </FilterDispatchContext.Provider>
    </FilterContext.Provider>
  )
}

export function useFilter() {
  const context = useContext(FilterContext)
  if (context === undefined) {
    throw new Error('useFilter must be used within a FilterProvider')
  }
  return context?.filters
}

export function useFilterDispatch() {
  const context = useContext(FilterDispatchContext)
  if (context === undefined) {
    throw new Error('useFilterDispatch must be used within a FilterProvider')
  }
  return context
}

export function useFilteredItems() {
  const context = useContext(FilterContext)
  if (context === undefined) {
    throw new Error('useFilteredItems must be used within a FilterProvider')
  }
  return getFilteredItems(context?.items, context?.filters)
}

function filtersReducer(state, action) {
  switch (action.type) {
    case 'setPriceFilter': {
      return {
        ...state,
        filters: {
          ...state.filters,
          price: {
            min: action.min,
            max: action.max
          }
        }
      }
    }
    case 'setIsOpenedForRecruitment': {
      return {
        ...state,
        filters: {
          ...state.filters,
          [action.filterName]: !state.filters[action.filterName]
        }
      }
    }
    case 'setDurationFilter': {
      return {
        ...state,
        filters: {
          ...state.filters,
          duration: {
            min: action.min,
            max: action.max
          }
        }
      }
    }
    case 'clearFilters': {
      return {
        ...state,
        filters: {}
      }
    }
    default: {
      throw new Error('Unknown action: ' + action.type)
    }
  }
}

function getFilteredItems(items, filters) {
  return (
    items &&
    items.filter(item => {
      if (filters.price) {
        if (item.price < filters.price.min || item.price > filters.price.max) {
          return false
        }
      }
      if (filters.duration) {
        if (item.duration) {
          if (
            item.duration < filters.duration.min ||
            item.duration > filters.duration.max
          ) {
            return false
          }
        }
        if (item.studyMounthsDuration) {
          if (
            item.studyMounthsDuration < filters.duration.min ||
            item.studyMounthsDuration > filters.duration.max
          ) {
            return false
          }
        }
      }
      for (const key in filters) {
        if (
          typeof filters[key] === 'boolean' &&
          filters[key] === true &&
          !item[key]
        ) {
          return false
        }
      }
      return true
    })
  )
}
