import styles from "./ButtonsContainer.module.css";
const ButtonsContainer = ({ onButtonClick }) => {
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
    "9",
    "0",
    "=",
    ".",
  ];
  return (
    <div className={styles.buttonContainer}>
      {buttonNumbers.map((num) => (
        <button className={styles.button} onClick={() => onButtonClick(num)}>
          {num}
        </button>
      ))}
    </div>
  );
};
export default ButtonsContainer;
