import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore } from 'redux';
import storeReducer from './reducers/index';
import {Provider} from 'react-redux';
let storeTodos = {
  activeFilter: 'ALL',
    todos:[

    { 
      id:0, 
      todo: 'Fare la spesa',
      completed: false
      },
      {
        id:1,
        todo: 'Fare i compiti', 
        completed: true
        },
    {
      id:2, 
      todo: 'chiamare la mamma', 
      completed: false
    }

  ]
};
  
  if(localStorage.getItem('mytodolist')){
    const currState = JSON.parse(localStorage.getItem('mytodolist'));
     if(currState){
      storeTodos = currState;
     }
  }
  
   const store = createStore(storeReducer, { ...storeTodos },
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() );

    store.subscribe(()=>{
      const currState = JSON.stringify(store.getState());
      localStorage.setItem('mytodolist', currState);
    }
      );
ReactDOM.render(
<Provider store ={store}>
  <App />
</Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
