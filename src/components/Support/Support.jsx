import { useState } from 'react';

function Support( props ){
    const [ support, setSupport ] = useState( null );

    const collectSupport = () => {
        console.log(event.target.value);
        setSupport('Support: ' + event.target.value);
    }
    const storeSupport = () => {
        console.log(support);
    }
    return (
        <div>
            <h2>How Well Are You Being Supported?</h2>
            <input onChange={collectSupport}type="text" />
            <button onClick={storeSupport}>Next</button>
            {/* <p>Props: { JSON.stringify( props ) }</p> */}
        </div>
    );
}

export default Support;