import {useState} from 'react';
import { useSelector } from 'react-redux';

function Table( props ){
    const [hook, setHook] = useState ( null )
    const feelingReducer = useSelector ( store => store.feelingReducer);
    return (
        <div>
            <h2>{feelingReducer}</h2>
        </div>

    );
}

export default Table;