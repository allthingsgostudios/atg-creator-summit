// Components
import { Button } from "../../components/Button/Button";
import { Section } from "../../components/Section/Section";

// CSS
import styles from "./hero.module.scss";

// Constants
const creatorSummitLogo =
    require("../../media/creator-summit-logo.png").default;
const festivaLogoSrc = require("../../media/festival-logo-2.png").default;
const presentedBySrc =
    require("../../media/presented-by-siriusxm-pandora.png").default;

export const Hero = (props) => {
    return (
        <Section classes={styles.hero} isFullScreen>
            <div className={styles.line} />
            <div className={styles.festivalLogo}>
                <a
                    href="https://www.allthingsgofestival.com"
                    rel="noreferrer"
                    target="_blank"
                >
                    <img
                        alt="All Things Go Music Festival Logo"
                        src={festivaLogoSrc}
                    />
                </a>
            </div>
            <div className={styles.main}>
                <div className={styles.creatorSummitLogo}>
                    <a
                        href="https://www.eventbrite.com/e/all-things-go-creator-summit-2021-tickets-172338508117"
                        rel="noreferrer"
                        target="_blank"
                    >
                        <img
                            alt="Creator Summit Logo"
                            src={creatorSummitLogo}
                        />
                    </a>
                </div>
                <div className={styles.presentedBy}>
                    <a
                        href="https://www.siriusxm.com/"
                        rel="noreferrer"
                        target="_blank"
                    >
                        <img
                            alt="Presented by SiriusXM and Pandora"
                            src={presentedBySrc}
                        />
                    </a>
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
                <span>
                    <a
                        href="https://allthingsgofestival.com/tickets"
                        rel="noreferrer"
                        target="_blank"
                    >
                        Festival Ticket Holders Will Receive Priority Access
                    </a>
                </span>
            </div>
        </Section>
    );
};
