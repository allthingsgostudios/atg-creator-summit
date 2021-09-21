import cx from "classnames";

// CSS
import styles from "./section.module.scss";

export const Section = (props) => {
    const { children, classes, isFullScreen } = props;

    return (
        <div
            className={cx(styles.section, classes, {
                [styles["section--full-screen"]]: isFullScreen,
            })}
        >
            {children}
        </div>
    );
};
