import { useState } from 'react';

function Comments( props ){
    const [ hook, setHook ] = useState( null )
    return (
        <div>
            <h2>Any Comments You Would Like To Leave?</h2>
            <input type="text" />
            <button>Next</button>
            {/* <p>Props: { JSON.stringify( props ) }</p> */}
        </div>
    );
}

export default Comments;