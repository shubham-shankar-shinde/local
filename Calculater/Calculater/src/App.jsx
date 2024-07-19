import styles from "./App.module.css";
import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";
import { useState } from "react";
function App() {
  const [calval, setcalval] = useState("");

  const Buttonclicked = (buttonText) => {
    if (buttonText === "c") {
      setcalval("");
    } else if (buttonText === "=") {
      const result = eval(calval);
      setcalval(result);
    } else {
      const newdisplayval = calval + buttonText;
      setcalval(newdisplayval);
    }
  };
  return (
    <div className={styles.calculater}>
      <Display calval={calval}></Display>
      <hr />
      <ButtonsContainer onButtonClick={Buttonclicked}></ButtonsContainer>
    </div>
  );
}

export default App;
