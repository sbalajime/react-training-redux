import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import rootReducer from "./redux/reducers";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";

//store
let store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

store.subscribe(() => console.log('store updated', store.getState()))

//dispatch

// store.dispatch(increment())
// store.dispatch(decrement())
// store.dispatch(decrement())


//Dispatch -> Action -> Reducer -> Store update

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
