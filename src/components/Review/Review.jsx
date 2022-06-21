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

  const updateFeeling = () => {
    console.log("in previousPage");
    history.push("/feeling");
  };


  const updateUnderstanding = () => {
    console.log("in previousPage");
    history.push("/understanding");
  };


  const updateSupport = () => {
    console.log("in previousPage");
    history.push("/support");
  };


  const updateComments = () => {
    console.log("in previousPage");
    history.push("/comments");
  };

  return (
    <div>
      <h1>Review Your Feedback</h1>

      <table>
        <tbody>
          {/* <thead>Feedback</thead> */}
          <tr>Feeling</tr> <td> {feelingReducer} <button onClick={updateFeeling}>Update</button></td>
          <tr>Understanding</tr> <td>{understandingReducer} <button onClick={updateUnderstanding}>Update</button></td>
          <tr>Support </tr> <td >{supportReducer} <button onClick={updateSupport}>Update</button></td>
          <tr>Comments </tr> <td>{commentsReducer} <button onClick={updateComments}>Update</button></td>
        </tbody>
      </table>
      <br />
      <button onClick={submitInfo}>Submit</button>
    </div>
  );
}

export default Review;
