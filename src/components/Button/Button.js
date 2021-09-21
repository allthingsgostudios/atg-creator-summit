// CSS
import styles from "./button.module.scss";

export const Button = (props) => {
    const { text } = props;
    return <button className={styles.button}>{text}</button>;
};
