import logo from './logo.svg';
import './App.css';
import {useSelector, useDispatch} from "react-redux";
import {increment, decrement} from "./redux/actions";
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
    console.log('this.props', this.props)
    return(<div>
      count: {this.props.count}
      <button onClick={() => this.props.increment()}>increment</button>  
          <button onClick={() => this.props.decrement()}>decrement</button>
    </div>)
  }
}



const mapStateToProps = (store) => {
  return({
    count: store.count
  })
}

export default connect(mapStateToProps, {increment, decrement})(App);
