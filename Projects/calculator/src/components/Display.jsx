import styles from "../App.module.css";
const Display = ({ displayValue }) => {
  return (
    <input
      type="text"
      id="display"
      className={styles.display}
      value={displayValue}
      readOnly
    />
  );
};
export default Display;
