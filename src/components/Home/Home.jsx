import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Button } from "@mui/material";

function Home(props) {
  const [hook, setHook] = useState(null);
  const history = useHistory();

  const startSurvey = () => {
    console.log(event.target.value);
    history.push("/feeling");
  };
  return (
    <div>
      <h2>Welcome!</h2>
      <Button variant='outlined' size ='Large' onClick={startSurvey}>Start Survey</Button>
    </div>
  );
}

export default Home;
