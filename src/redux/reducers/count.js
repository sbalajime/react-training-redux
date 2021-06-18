const countReducer = (state = 0, action) => {
    console.log('inside reducer', action)
    switch(action.type) {
      case 'INCREMENT':
        return state + 1;
        case 'DECREMENT':
        return state - 1;
      default :
        return state;
    }
  }

  export default countReducer;