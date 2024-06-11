import styles from "./App.module.css";
import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";
function App() {
  const buttonNumbers = [
    "c",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div className={styles.calculater}>
      <Display></Display>
      <ButtonsContainer buttonNumbers={buttonNumbers}></ButtonsContainer>
    </div>
  );
}

export default App;
