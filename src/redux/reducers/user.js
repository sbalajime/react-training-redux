const initalState = {userName: '', city: '', weatherData: {}, loading: false}

const countReducer = (state = initalState, action) => {
    console.log('inside reducer', action)
    switch(action.type) {
      case 'SET_USER_NAME':
        return {
            ...state,
            userName: action.payload
        }
        case 'SET_CITY':
            return {
                ...state,
                city: action.payload
            }
        case 'GET_WEATHER_REQUEST': 
            return {
                ...state,
                loading: true
            }
        case 'GET_WEATHER_SUCCESS': 
            return {
                ...state,
                loading: false,
                weatherData: action.payload
            }
        case 'GET_WEATHER_FAILURE': 
            return {
                ...state,
                loading: false
            }
      default :
        return state;
    }
  }

  export default countReducer;