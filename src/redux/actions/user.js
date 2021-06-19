export const setUserName = (data) => {
    return ({type: 'SET_USER_NAME', payload: data})
  }
  

  export const setCity = (data) => {
    return ({type: 'SET_CITY', payload: data})
  }
  


  export const getWeather = () => dispatch => {
    dispatch(getWeatherRequest()) //loading -> true
    fetch('https://goweather.herokuapp.com/weather/thoothukudi')
    .then(res => res.json())
    .then(data => dispatch(getWeatherSuccess(data))) //loading => false
    .catch(err => dispatch(getWeatherFailure())) //Loading => false
  }

  export const getWeatherRequest = (data) => {
    return ({type: 'GET_WEATHER_REQUEST'})
  }
  
  export const getWeatherSuccess = (data) => {
    return ({type: 'GET_WEATHER_SUCCESS', payload: data})
  }
  
  export const getWeatherFailure = (data) => {
    return ({type: 'GET_WEATHER_FAILURE'})
  }
  