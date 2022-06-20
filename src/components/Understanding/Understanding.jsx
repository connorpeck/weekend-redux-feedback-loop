import { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';

function Understanding( props ){
    const [ understanding, setUnderstanding ] = useState( null );

    const understandingReducer = useSelector( store => store.understandingReducer);
    const dispatch = useDispatch();
    const history = useHistory();

    const collectUnderstanding = () => {
        console.log(event.target.value);
        setUnderstanding( event.target.value);
    }
    const storeUnderstanding = () => {
        console.log(understanding);
        dispatch ( { type: 'ADD_UNDERSTANDING', payload: understanding});
        history.push( '/support' );
    }
    
    return (
        <div>
             <h2>How Well Are You Understanding The Conent?</h2>
             <input onChange={collectUnderstanding}type="number" />
            <button onClick={storeUnderstanding}>Next</button>
            {/* <p>Props: { JSON.stringify( props ) }</p> */}
        </div>
    );
}

export default Understanding;