// Components
import { Button } from "../../components/Button/Button";
import { Section } from "../../components/Section/Section";

// CSS
import styles from "./faq.module.scss";

export const Faq = (props) => {
    return (
        <Section classes={styles.faq}>
            <span className={styles.header}>FAQ</span>
            <div className={styles.items}>
                <div className={styles.item}>
                    <span className={styles.question}>
                        When is the Creator Summit taking place?
                    </span>
                    <span className={styles.answer}>
                        The Creator Summit will take place on Friday, October
                        15th from 6:30PM - 9PM in the Beverly Snow Room at Eaton
                        DC, located at{" "}
                        <a
                            href="https://g.page/EatonDC?share"
                            rel="noreferrer"
                            target="_blank"
                        >
                            1201 K Street Northwest, Washington, DC 20005
                        </a>
                        .
                    </span>
                </div>
                <div className={styles.item}>
                    <span className={styles.question}>
                        What is your COVID-19 policy?
                    </span>
                    <span className={styles.answer}>
                        All patrons attending the All Things Go Creator Summit
                        will be required to show proof of full vaccination
                        against COVID-19 or a medically-administered
                        laboratory-based negative test result from a test taken
                        within the 72 hours prior to the event, along with a
                        matching photo ID. Proof of vaccination can be your
                        physical vaccine card or a photo of your card.
                        Additionally, all patrons must wear a mask at all times
                        inside the venue regardless of vaccination status until
                        further notice, per the Mayor’s order which went into
                        effect on July 31, 2021. Patrons who have a fever or are
                        exhibiting symptoms of COVID-19 should stay home. We
                        can’t wait to enjoy the return of live events with you
                        safely!
                    </span>
                </div>
                <div className={styles.item}>
                    <span className={styles.question}>
                        Does RSVP guarantee admission?
                    </span>
                    <span className={styles.answer}>
                        An RSVP is required to enter the Creator Summit but does
                        not guarantee entry. Entry will be provided on a
                        first-come-first-served basis. Creator Summit attendees
                        that have purchased tickets to the{" "}
                        <a
                            href="https://allthingsgofestival.com"
                            rel="noreferrer"
                            target="_blank"
                        >
                            All Things Go Music Festival
                        </a>{" "}
                        will receive preferred entry.
                    </span>
                </div>
                <div className={styles.item}>
                    <span className={styles.question}>
                        Who should I contact if I have questions?
                    </span>
                    <span className={styles.answer}>
                        You can reach All Things Go by sending an email to{" "}
                        <a href="mailto:support@allthingsgomusic.com">
                            support [at] allthingsgomusic [dot] com
                        </a>
                        .
                    </span>
                </div>
            </div>
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
