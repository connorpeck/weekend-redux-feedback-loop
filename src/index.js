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

const understandingReducer = (state='', action) =>{
    console.log('understandingReducer', action);
    if (action.type === 'ADD_UNDERSTANDING'){
        state = action.payload
    }
    return state;
} // end understanding reducer

const supportReducer = (state='', action) =>{
    console.log('supportReducer', action);
    if (action.type === 'ADD_SUPPORT'){
        state = action.payload
    }
    return state;
} // end support reducer

const commentsReducer = (state='', action) =>{
    console.log('commentsReducer', action);
    if (action.type === 'ADD_COMMENTS'){
        state = action.payload
    }
    return state;
} // end comments reducer



const store = createStore (
    combineReducers({
        feelingReducer,
        understandingReducer,
        supportReducer,
        commentsReducer
    })
) // end create store
ReactDOM.render(<Provider store = {store}><App /></Provider>, document.getElementById('root'));
// registerServiceWorker();
