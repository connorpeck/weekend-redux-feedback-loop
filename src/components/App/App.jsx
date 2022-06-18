import React from 'react';
import axios from 'axios';
import './App.css';
import { Route, HashRouter as Router} from 'react-router-dom';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';
import {useSelector} from 'react-redux';


function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <ul>
       
        <li><a href="/#/feeling">Feeling</a></li>
        <li><a href="/#/understanding">Understanding</a></li>
        <li><a href="/#/support">Support</a></li>
        <li><a href="/#/comments">Comments</a></li>
        <li><a href="/#/review">Review</a></li>
     
      </ul>
      <Router>
        <Route path='/feeling' >
      < Feeling />
      </Route>
      <Route path='/understanding' >
      < Understanding />
      </Route>
      <Route path='/support' >
      < Support />
      </Route>
      <Route path='/comments' >
      < Comments />
      </Route>
      <Route path='/review' >
      < Review />
      </Route>
      </Router>
    </div>
  );
}

export default App;
