// Components
import { Section } from "../../components/Section/Section";

// Data
import { partners } from "../../data/partners";

// Style
import styles from "./partners.module.scss";

export const Partners = (props) => {
    function renderPartners() {
        return partners.map((partner, i) => {
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
            <div className={styles.grid}>{renderPartners()}</div>
        </Section>
    );
};
