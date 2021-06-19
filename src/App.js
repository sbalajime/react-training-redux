import logo from './logo.svg';
import './App.css';
import {useSelector, useDispatch} from "react-redux";
import {increment, decrement, setUserName, setCity, getWeather} from "./redux/actions";
import React, {Component} from 'react';
import {connect} from "react-redux";





// function App() {
//   const count = useSelector((state) => state.count);
//   const dispatch = useDispatch();
//   return (
//     <div className="App">
//       <div>Hello world</div>
//       <div>{count}</div>
//       <button onClick={() => dispatch(increment())}>increment</button>
//       <button onClick={() => dispatch(decrement())}>decrement</button>
//     </div>
//   );
// }

class App extends Component {


  render(){
    return(<div>
      count: {this.props.count}
      <button onClick={() => this.props.increment()}>increment</button>  
          <button onClick={() => this.props.decrement()}>decrement</button>

          <div>
            Name: {this.props.userName}
          </div>
          <div>
            City: {this.props.city}
          </div>
          <button onClick={() => this.props.setUserName('Balaji')}>Set Name</button>
          <button onClick={() => this.props.setCity('Thoothukudi')}>Set city</button>
          <div>Weather: {this.props.loading ? `Loading....` : this.props.weatherData.temperature}</div>
          <button onClick={this.props.getWeather}>Get Weather</button>
    </div>)
  }
}



const mapStateToProps = (store) => {
  return({
    count: store.count,
    userName: store.user.userName,
    city: store.user.city,
    weatherData: store.user.weatherData,
    loading: store.user.loading
  })
}

export default connect(mapStateToProps, {increment, decrement, setUserName, setCity, getWeather})(App);
