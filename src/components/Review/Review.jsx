import { useState } from "react";
import { useSelector } from "react-redux";
import "./review.css";
import { useHistory } from "react-router-dom";
import axios from "axios";

function Review(props) {
  const [hook, setHook] = useState(null);
  const feelingReducer = useSelector((store) => store.feelingReducer);
  const understandingReducer = useSelector(
    (store) => store.understandingReducer
  );
  const supportReducer = useSelector((store) => store.supportReducer);
  const commentsReducer = useSelector((store) => store.commentsReducer);
  const history = useHistory();

  const feedbackToSubmit = {
    feeling: feelingReducer,
    understanding: understandingReducer,
    support: supportReducer,
    comments: commentsReducer,
  }; // end feedbackToSubmit object

  const submitInfo = () => {
    console.log("in submitInfo ");
    history.push("/success");
    axios
      .post("/feedback.router", feedbackToSubmit)
      .then(function (response) {
        console.log("back from POST response is:", response);
      })
      .catch(function (err) {
        console.log(err);
        alert("error in POST");
      });
  };

  return (
    <div>
      <h1>Review Your Feedback</h1>

      <table>
        <tbody>
          <tr>Feeling: {feelingReducer} </tr>
          <tr>Understanding: {understandingReducer}</tr>
          <tr>Support: {supportReducer}</tr>
          <tr>Comments: {commentsReducer}</tr>
        </tbody>
      </table>
      <br />
      <button onClick={submitInfo}>Submit</button>
    </div>
  );
}

export default Review;
