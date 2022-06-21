import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Button } from "@mui/material";

function Success(props) {
  const [hook, setHook] = useState(null);
  const history = useHistory();

  const leaveNewFeedback = () => {
    console.log("in leaveNewFeedback");
    history.push("/home");
  };
  return (
    <div>
      <h2>Thank You</h2>
      <Button variant='contained' size='large' color='success' onClick={leaveNewFeedback}>Leave New Feedback</Button>
    </div>
  );
}

export default Success;
