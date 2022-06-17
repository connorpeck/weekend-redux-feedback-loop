import { useState } from 'react';

function Comments( props ){
    const [ comments, setComments ] = useState( null );

    const collectComments = () => {
        console.log(event.target.value);
        setComments('Comments: ' + event.target.value);
    }
    const storeComments = () => {
        console.log(comments);
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