import { useState } from 'react';

function Understanding( props ){
    const [ hook, setHook ] = useState( null )
    return (
        <div>
             <h2>How Well Are You Understanding The Conent?</h2>
            <input type="text" />
            <button>Next</button>
            {/* <p>Props: { JSON.stringify( props ) }</p> */}
        </div>
    );
}

export default Understanding;