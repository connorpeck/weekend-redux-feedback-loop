import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, HashRouter as Router } from "react-router-dom";
import { Button } from "@mui/material";
import "./Feeling.css";
// import { useNavigate} from 'react-router-dom'//
// not working with this version of rrd
import { useHistory } from "react-router-dom";
import Understanding from "../Understanding/Understanding";

function Feeling(props) {
  const [feeling, setFeeling] = useState("");
  const feelingReducer = useSelector((store) => store.feelingReducer);
  const dispatch = useDispatch();

  const emptyFieldAlert = () => {
    alert("Please input a number ");
  }; // end emptyFieldAlert

  const history = useHistory();

  const collectFeeling = () => {
    console.log(event.target.value);
    setFeeling(event.target.value);
  };

  const storeFeeling = () => {
    console.log(feeling);
    {
      feeling
        ? dispatch(
            { type: "ADD_FEELING", payload: feeling },
            history.push("/understanding")
          )
        : emptyFieldAlert();
    } // end conditional
  }; // end storeFeeling

  const previousPage = () => {
    console.log("in previousPage");
    history.push("/home");
  };

  return (
    <div className="feelingDiv">
      <h2>How are you feeling today?</h2>
      <Button variant='text' size='small' onClick={previousPage}>Back</Button>
      <input onChange={collectFeeling} type="number" placeholder="1-10"/>
      <Button variant='text' size='small' onClick={storeFeeling}>Next</Button>
      {/* <Router>

            <Route path='/understanding' >
            < Understanding />
             </Route>
             </Router> */}
      {/* <p>Props: { JSON.stringify( props ) }</p> */}
    </div>
  );
}

export default Feeling;
