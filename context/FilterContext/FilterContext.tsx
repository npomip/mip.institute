import { findMinMaxForSlider } from '@/components/funcs/findMinMaxForSlider'
import React, { createContext, useContext, useReducer } from 'react'

interface IFilter {
  bool: boolean
  input: {
    text: string
  }
  courseOpened: boolean
  isPopular: boolean
  type: ProgramTypes
  duration: { min: number; max: number }
}

export enum ProgramTypes {
  Professions = 'Profession',
  Courses = 'Course'
}

const FilterContext = createContext(null)
const FilterDispatchContext = createContext(null)
const initialFilters: IFilter = {
  bool: false,
  input: { text: '' },
  courseOpened: false,
  isPopular: false,
  duration: { min: 0, max: 1 },
  type: ProgramTypes.Professions || ProgramTypes.Courses
}

export function FilterProvider({ children, items }) {
  const [state, dispatch] = useReducer(filtersReducer, {
    filters: initialFilters,
    items: items,
    additional: { reset: false }
  })

  // const durations = items.map(el => el.duration)
  // const prices = items.map(el => el.price)

  // const minmaxDuration = findMinMaxForSlider(durations)
  // console.log(minmaxDuration);
  // const minmaxPrice = findMinMaxForSlider(prices)
  // initialFilters.duration = {
  //   min: minmaxDuration.min,
  //   max: minmaxDuration.max
  // }

  console.log(
    'IN FUNC CONTEXT',
    items,
    state.filters,
    state.items,
    state.additional
  )

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
  return { filters: context.filters, additional: context.additional }
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
  return getFilteredItems(context.items, context.filters)
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
    case 'setInputValue': {
      return {
        ...state,
        filters: {
          ...state.filters,
          input: {
            text: action.payload
          }
        }
      }
    }
    case 'setBooleanFilter': {
      return {
        ...state,
        filters: {
          ...state.filters,
          [action.filterName]: true
        }
      }
    }
    case 'clearBooleanFilter': {
      return {
        ...state,
        filters: {
          ...state.filters,
          [action.filterName]: false
        }
      }
    }
    case 'setPrograms': {
      return {
        ...state,
        filters: {
          ...state.filters,
          type: action.payload
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
        filters: initialFilters
        // bool: true
      }
    }
    case 'setBool': {
      return {
        ...state,
        additional: {
          ...state.additional,
          reset: action.payload
        }
      }
    }
    case 'sortFilter': {
      return {
        ...state,
        filters: {
          ...state.filters,
          sort: action.payload
        }
      }
    }
    default: {
      throw new Error('Unknown action: ' + action.type)
    }
  }
}

function getFilteredItems(items, filters) {
  return items.filter(item => {
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
    if (filters.input.text) {
      if (
        !item.title.toLowerCase().includes(filters.input.text.toLowerCase())
      ) {
        return false
      }
    }
    if (filters.type) {
      return filters.type === item.type
    }
    if (filters.sort) {
      console.log('SORT')

      if (filters.sort.direction === 'asc') {
        console.log('ASC')
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
}
