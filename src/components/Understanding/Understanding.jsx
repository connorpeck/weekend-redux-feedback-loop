import { useState } from 'react';

function Understanding( props ){
    const [ understanding, setUnderstanding ] = useState( null );

    const collectUnderstanding = () => {
        console.log(event.target.value);
        setUnderstanding('Understanding: ' + event.target.value);
    }
    const storeUnderstanding = () => {
        console.log(understanding);
    }
    
    return (
        <div>
             <h2>How Well Are You Understanding The Conent?</h2>
             <input onChange={collectUnderstanding}type="text" />
            <button onClick={storeUnderstanding}>Next</button>
            {/* <p>Props: { JSON.stringify( props ) }</p> */}
        </div>
    );
}

export default Understanding;