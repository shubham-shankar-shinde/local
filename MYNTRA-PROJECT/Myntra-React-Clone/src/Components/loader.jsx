import styles from "./loader.module.css";
const Loader = () => {
  return (
    <div className={styles.main}>
      <div className={styles.loading}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};
export default Loader;
