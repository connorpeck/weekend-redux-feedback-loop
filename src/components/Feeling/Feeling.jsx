import { useState } from 'react';

function Feeling( props ){
    const [ feeling, setFeeling ] = useState( null );

    const collectFeeling = () => {
        console.log(event.target.value);
        setFeeling('Feelings: ' + event.target.value);
    }
    const storeFeeling = () => {
        console.log(feeling);
    }
    return (
        <div>
            <h2>How are you feeling today?</h2>
            <input onChange={collectFeeling}type="text" />
            <button onClick={storeFeeling}>Next</button>
            {/* <p>Props: { JSON.stringify( props ) }</p> */}
        </div>
    );
}

export default Feeling;