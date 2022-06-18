import { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';

function Feeling( props ){
    const [ feeling, setFeeling ] = useState( null );
    const feelingReducer = useSelector( store => store.feelingReducer);
    const dispatch = useDispatch();

    const collectFeeling = () => {
        console.log(event.target.value);
        setFeeling('Feelings: ' + event.target.value);
    }
    const storeFeeling = () => {
        console.log(feeling);
        dispatch ( { type: 'ADD_FEELING', payload: feeling});
    }
    return (
        <div>
            <h2>How are you feeling today?</h2>
            <input onChange={collectFeeling}type="number" />
            <button onClick={storeFeeling}>Next</button>
            {/* <p>Props: { JSON.stringify( props ) }</p> */}
        </div>
    );
}

export default Feeling;