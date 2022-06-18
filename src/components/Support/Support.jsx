import { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';

function Support( props ){
    const [ support, setSupport ] = useState( null );

    const supportReducer = useSelector( store => store.supportReducer);
    const dispatch = useDispatch();
    const history = useHistory();

    const collectSupport = () => {
        console.log(event.target.value);
        setSupport('Support: ' + event.target.value);
    }
    const storeSupport = () => {
        console.log(support);
        dispatch ( { type: 'ADD_SUPPORT', payload: support});
        history.push('/comments');
    }
    return (
        <div>
            <h2>How Well Are You Being Supported?</h2>
            <input onChange={collectSupport}type="number" />
            <button onClick={storeSupport}>Next</button>
            {/* <p>Props: { JSON.stringify( props ) }</p> */}
        </div>
    );
}

export default Support;