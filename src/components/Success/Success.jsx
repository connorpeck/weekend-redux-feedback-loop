import { useState } from 'react';
import { useHistory } from 'react-router-dom';

function Success( props ){
    const [ hook, setHook ] = useState( null );
    const history = useHistory();

    const leaveNewFeedback = () => {
        console.log('in leaveNewFeedback');
        history.push( '/home' );
    }
    return (
        <div>
            <h2>Thank You</h2>
            <button onClick={leaveNewFeedback}>Leave New Feedback</button>
        </div>
    );
}

export default Success;