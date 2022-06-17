import { useState } from 'react';

function Feeling( props ){
    const [ hook, setHook ] = useState( null )
    return (
        <div>
            <h2>How are you feeling today?</h2>
            <input type="text" />
            <button>Next</button>
            {/* <p>Props: { JSON.stringify( props ) }</p> */}
        </div>
    );
}

export default Feeling;