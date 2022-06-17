import { useState } from 'react';

function Support( props ){
    const [ hook, setHook ] = useState( null )
    return (
        <div>
            <h2>How Well Are You Being Supported?</h2>
            <input type="text" />
            <button>Next</button>
            {/* <p>Props: { JSON.stringify( props ) }</p> */}
        </div>
    );
}

export default Support;