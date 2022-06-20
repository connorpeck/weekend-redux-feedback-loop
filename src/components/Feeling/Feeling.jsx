import React from 'react';
import { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { Route, HashRouter as Router } from 'react-router-dom';
// import { useNavigate} from 'react-router-dom'//
// not working with this version of rrd
import { useHistory } from 'react-router-dom';
import Understanding from '../Understanding/Understanding';

function Feeling( props ){
    const [ feeling, setFeeling ] = useState( null );
    const feelingReducer = useSelector( store => store.feelingReducer);
    const dispatch = useDispatch();
    // const naviagte = useNavigate();
    const history = useHistory();

    const collectFeeling = () => {
        console.log(event.target.value);
        setFeeling( event.target.value);
    }

    
    const storeFeeling = () => {
        console.log(feeling);
        dispatch ( { type: 'ADD_FEELING', payload: feeling});
        history.push( '/understanding' );

    }

    return (
        <div>
            
            <h2>How are you feeling today?</h2>
            <input onChange={collectFeeling}type="number" />
           
            <button onClick={storeFeeling}>Next</button>
            {/* <Router>

            <Route path='/understanding' >
            < Understanding />
             </Route>
             </Router> */}
            {/* <p>Props: { JSON.stringify( props ) }</p> */}
        </div>
    );
}

export default Feeling;