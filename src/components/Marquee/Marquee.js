import cx from "classnames";

// CSS
import styles from "./marquee.module.scss";

export const Marquee = (props) => {
    const { text } = props;

    return (
        <div className={styles.marquee}>
            <div className={cx(styles.block, styles["block--first"])}>
                <span className={styles.text}>{text} </span>
            </div>
            <div className={cx(styles.block, styles["block--second"])}>
                <span className={styles.text}>{text} </span>
            </div>
        </div>
    );
};
