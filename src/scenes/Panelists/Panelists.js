import { useState } from "react";
import { Modal, ModalHeader, ModalBody, SIZE, ROLE } from "baseui/modal";

// Components
import { Section } from "../../components/Section/Section";

// CSS
import styles from "./panelists.module.scss";

// Data
import { panelists as data } from "../../data/panelists";

export const Panelists = (props) => {
    const { type } = props;

    /**
     * useState
     */

    const [selectedPanelist, setSelectedPanelist] = useState(null);
    const [showModal, setShowModal] = useState(false);

    /**
     * End Hooks
     */

    const panelists = data[type];

    function selectPanelist(panelist) {
        setSelectedPanelist(panelist);
        setShowModal(true);
    }

    function renderPanelists() {
        return panelists.map((panelist, i) => {
            return (
                <div className={styles.panelist} key={i}>
                    <div
                        className={styles.photo}
                        style={{ backgroundImage: `url(${panelist.photo})` }}
                    >
                        <div
                            className={styles.more}
                            onClick={() => selectPanelist(panelist)}
                        >
                            <span>+</span>
                        </div>
                    </div>
                    <span className={styles.name}>{panelist.name}</span>
                    <span className={styles.subtitle}>{panelist.subtitle}</span>
                </div>
            );
        });
    }

    return (
        <>
            <Section classes={styles.panelists}>
                <div className={styles.grid}>{renderPanelists()}</div>
            </Section>
            <Modal
                className="modal"
                onClose={() => setShowModal(false)}
                closeable
                isOpen={showModal}
                animate
                autoFocus
                size={SIZE.default}
                role={ROLE.dialog}
                overrides={{
                    Dialog: {
                        style: () => ({
                            backgroundColor: "var(--cream)",
                            border: "1rem solid var(--red)",
                        }),
                    },
                }}
            >
                <ModalHeader>
                    <span className={styles.header}>
                        {selectedPanelist?.name}
                    </span>
                </ModalHeader>
                <ModalBody>
                    <div className={styles.modal}>
                        <span className={styles.title}>
                            {selectedPanelist?.title}
                        </span>
                        {selectedPanelist?.bio.map((paragraph, i) => {
                            return (
                                <p className={styles.bio} key={i}>
                                    {paragraph}
                                </p>
                            );
                        })}
                    </div>
                </ModalBody>
            </Modal>
        </>
    );
};
