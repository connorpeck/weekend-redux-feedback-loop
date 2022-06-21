import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import "./Support.css";

function Support(props) {
  const [support, setSupport] = useState("");

  const supportReducer = useSelector((store) => store.supportReducer);
  const dispatch = useDispatch();
  const history = useHistory();

  const emptyFieldAlert = () => {
    alert("Please input a number");
  }; // end emptyFieldAlert

  const collectSupport = () => {
    console.log(event.target.value);
    setSupport(event.target.value);
  };
  const storeSupport = () => {
    console.log(support);
    {
      support
        ? dispatch(
            { type: "ADD_SUPPORT", payload: support },
            history.push("/comments")
          )
        : emptyFieldAlert();
    } // end conditional
  }; // end storeSupport

  const previousPage = () => {
    console.log("in previousPage");
    history.push("/understanding");
  };

  return (
    <div className="supportDiv">
      <h2>How Well Are You Being Supported?</h2>
      <button onClick={previousPage}>Back</button>
      <input onChange={collectSupport} type="number" />
      <button onClick={storeSupport}>Next</button>
      {/* <p>Props: { JSON.stringify( props ) }</p> */}
    </div>
  );
}

export default Support;
