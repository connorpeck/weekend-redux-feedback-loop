import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import "./Comments.css";
import { Button } from "@mui/material";

function Comments(props) {
  const [comments, setComments] = useState(null);
  const commentsReducer = useSelector((store) => store.commentsReducer);
  const dispatch = useDispatch();
  const history = useHistory();

  const collectComments = () => {
    console.log(event.target.value);
    setComments(event.target.value);
  };
  const storeComments = () => {
    console.log(comments);
    dispatch({ type: "ADD_COMMENTS", payload: comments });
    history.push("/review");
  };

  const previousPage = () => {
    console.log("in previousPage");
    history.push("/support");
  };

  return (
    <div className="commentsDiv">
      <h2>Any Comments You Would Like To Leave?</h2>
      <Button variant='text' size='small' onClick={previousPage}>Back</Button>
      <input onChange={collectComments} type="text" placeholder="Comments?" />
      <Button variant='text' size='small' onClick={storeComments}>Next</Button>
      {/* <p>Props: { JSON.stringify( props ) }</p> */}
    </div>
  );
}

export default Comments;
