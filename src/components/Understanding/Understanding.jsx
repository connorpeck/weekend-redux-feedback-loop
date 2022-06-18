import { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';

function Understanding( props ){
    const [ understanding, setUnderstanding ] = useState( null );

    const understandingReducer = useSelector( store => store.understandingReducer);
    const dispatch = useDispatch();

    const collectUnderstanding = () => {
        console.log(event.target.value);
        setUnderstanding('Understanding: ' + event.target.value);
    }
    const storeUnderstanding = () => {
        console.log(understanding);
        dispatch ( { type: 'ADD_UNDERSTANDING', payload: understanding});
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