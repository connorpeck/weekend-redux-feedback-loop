import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import "./Understanding.css";
import { Button } from "@mui/material";

function Understanding(props) {
  const [understanding, setUnderstanding] = useState("");

  const understandingReducer = useSelector(
    (store) => store.understandingReducer
  );
  const dispatch = useDispatch();
  const history = useHistory();

  const emptyFieldAlert = () => {
    alert("Please input a number");
  }; // end emptyFieldAlert

  const collectUnderstanding = () => {
    console.log(event.target.value);
    setUnderstanding(event.target.value);
  }; // end collectUnderstanding

  const storeUnderstanding = () => {
    console.log(understanding);
    {
      understanding
        ? dispatch(
            { type: "ADD_UNDERSTANDING", payload: understanding },
            history.push("/support")
          )
        : emptyFieldAlert();
    } // end conditional
  }; // end storeUnderstanding

  const previousPage = () => {
    console.log("in previousPage");
    history.push("/feeling");
  };

  return (
    <div className="understandingDiv">
      <h2>How Well Are You Understanding The Conent?</h2>
      <Button variant='text' size='small' onClick={previousPage}>Back</Button>
      <input onChange={collectUnderstanding} type="number" placeholder="1-10" />
      <Button variant='text' size='small' onClick={storeUnderstanding}>Next</Button>
      {/* <p>Props: { JSON.stringify( props ) }</p> */}
    </div>
  );
}

export default Understanding;
