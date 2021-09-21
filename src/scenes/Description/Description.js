// Components
import { Button } from "../../components/Button/Button";
import { Section } from "../../components/Section/Section";

// CSS
import styles from "./description.module.scss";

export const Description = (props) => {
    return (
        <Section classes={styles.description}>
            <p className={styles.text}>
                The All Things Go Creator Summit is a panel series highlighting
                innovative women in music and media.
            </p>
            <div className={styles.buttonContainer}>
                <a
                    href="https://www.eventbrite.com/e/all-things-go-creator-summit-2021-tickets-172338508117"
                    rel="noreferrer"
                    target="_blank"
                    style={{ textDecoration: "none" }}
                >
                    <Button text="FREE WITH RSVP" />
                </a>
            </div>
        </Section>
    );
};
