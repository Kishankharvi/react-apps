import styles from "../App.module.css";

const ButtonsContainer = ({ onButtonClick }) => {
  const ButtonName = [
    "C",
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
    <div id="buttonsContainer" className={styles.buttonsContainer}>
      {ButtonName.map((buttonn) => (
        <button
          className={styles.button}
          onClick={() => onButtonClick(buttonn)}
        >
          {buttonn}
        </button>
      ))}
    </div>
  );
};
export default ButtonsContainer;
