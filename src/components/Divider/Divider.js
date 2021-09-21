// CSS
import styles from "./divider.module.scss";

// Constants
const dotDividerSrc = require("../../media/dot-divider.png").default;

export const Divider = (props) => {
    return (
        <div className={styles.divider}>
            <img alt="Page divider made up of red dots" src={dotDividerSrc} />
            <img alt="Page divider made up of red dots" src={dotDividerSrc} />
        </div>
    );
};
