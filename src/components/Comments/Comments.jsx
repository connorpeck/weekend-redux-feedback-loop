import { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';

function Comments( props ){
    const [ comments, setComments ] = useState( null );
    const commentsReducer = useSelector( store => store.commentsReducer);
    const dispatch = useDispatch();

    const collectComments = () => {
        console.log(event.target.value);
        setComments('Comments: ' + event.target.value);
    }
    const storeComments = () => {
        console.log(comments);
        dispatch ( { type: 'ADD_COMMENTS', payload: comments});

    }
    return (
        <div>
            <h2>Any Comments You Would Like To Leave?</h2>
            <input onChange={collectComments}type="text" />
            <button onClick={storeComments}>Next</button>
            {/* <p>Props: { JSON.stringify( props ) }</p> */}
        </div>
    );
}

export default Comments;