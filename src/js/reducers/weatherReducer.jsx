export default function reducer(state = {
  weather: [],
  fetching: false,
  fetched: false,
  error: null,
  searchedCity: '',
}, action) {
  switch (action.type) {
    case "SEARCH_CITY": {
      return {
        ...state,
        searchedCity: action.payload,
      }
    }
    case "FETCH_WEATHER": {
        return { 
          ...state,
          fetching: true,
        }
    }
    case "FETCH_WEATHER_REJECTED": {
        return { 
          ...state,
          fetching: false,
          error: action.payload,
        }
    }
    case "FETCH_WEATHER_FULFILLED": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          weather: action.payload,
        }
    }
  }
  return state
}
