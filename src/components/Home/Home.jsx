import { useState } from 'react';
import { useHistory } from 'react-router-dom';

function Home( props ){
    const [ hook, setHook ] = useState( null );
    const history = useHistory();

    const startServey = () => {
        console.log(event.target.value);
        history.push('/feeling')
    }
    return (
        <div>
            <h2>Welcome!</h2>
            <button onClick={startServey}>Begin Form</button>
        </div>
    );
}

export default Home;