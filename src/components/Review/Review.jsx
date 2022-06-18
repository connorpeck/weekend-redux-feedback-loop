import {useState} from 'react';
import { useSelector } from 'react-redux';
import './review.css'
import { useHistory } from 'react-router-dom';

function Review( props ){
    const [hook, setHook] = useState ( null )
    const feelingReducer = useSelector ( store => store.feelingReducer);
    const understandingReducer = useSelector ( store => store.understandingReducer);
    const supportReducer = useSelector ( store => store.supportReducer);
    const commentsReducer = useSelector ( store => store.commentsReducer);
    const history = useHistory();

    const submitInfo = () => {
        console.log('in submitInfo ');
        history.push('/success')
    }

    return (
        <div>
            <h1>Review Your Feedback</h1>
            
            <table>
                <tbody>
            <tr>{feelingReducer} </tr>
            <tr>{understandingReducer}</tr>
            <tr>{supportReducer}</tr>
            <tr>{commentsReducer}</tr>
            </tbody>

            </table>
            <br />
            <button onClick={submitInfo}>Submit</button>

            
        </div>

    );
}

export default Review;