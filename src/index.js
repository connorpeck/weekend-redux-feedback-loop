import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
// import registerServiceWorker from './registerServiceWorker';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';

const feelingReducer = (state='', action) =>{
    console.log('in feelingReducer', action);
    if (action.type === 'ADD_FEELING'){
        state = action.payload
    }
    return state;
} // end feeling reducer


const store = createStore (
    combineReducers({
        feelingReducer
    })
) // end create store
ReactDOM.render(<Provider store = {store}><App /></Provider>, document.getElementById('root'));
// registerServiceWorker();
