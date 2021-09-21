import cx from "classnames";

// Components
import { Section } from "../../components/Section/Section";

// Data
import { partnersFirstRow, partnersSecondRow } from "../../data/partners";

// Style
import styles from "./partners.module.scss";

export const Partners = (props) => {
    function renderPartnersFirstRow() {
        return partnersFirstRow.map((partner, i) => {
            return (
                <a
                    className={styles.partner}
                    href={partner.link}
                    key={i}
                    rel="noreferrer"
                    target="_blank"
                >
                    <img alt={partner.name} src={partner.image} />
                </a>
            );
        });
    }

    function renderPartnersSecondRow() {
        return partnersSecondRow.map((partner, i) => {
            return (
                <a
                    className={styles.partner}
                    href={partner.link}
                    key={i}
                    rel="noreferrer"
                    target="_blank"
                >
                    <img alt={partner.name} src={partner.image} />
                </a>
            );
        });
    }

    return (
        <Section classes={styles.partners}>
            <span className={styles.header}>PARTNERS</span>
            <div className={cx(styles.row, styles["row--first"])}>
                {renderPartnersFirstRow()}
            </div>
            <div className={cx(styles.row, styles["row--second"])}>
                {renderPartnersSecondRow()}
            </div>
        </Section>
    );
};
