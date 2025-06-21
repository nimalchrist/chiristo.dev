import * as motion from "motion/react-client";
import { containerVariants, itemVariants, listHoverAnimation, listTapAnimation } from "../../utils/linksPageUtils/animations";
import styles from "./links.module.scss";
import { getPersonalLinksData, getPromotedLinksData } from "../../data/linksPageData";


export default function LinksPage() {
    const personalLinksArray = getPersonalLinksData()
    const promotedLinksArray = getPromotedLinksData();
    return (
        <div className={styles.linksPage}>
            <h1>Chiristo&apos;s Links</h1>

            <motion.div
                className={styles.personalLinks}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <h3>My Links</h3>

                {personalLinksArray.map(({ href, Icon, label }, i) => (
                    <motion.a
                        key={i}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.linkContainer}
                        variants={itemVariants}
                        whileHover={listHoverAnimation}
                        whileTap={listTapAnimation}
                    >
                        <Icon />
                        <h3>{label}</h3>
                    </motion.a>
                ))}
            </motion.div>

            <motion.div
                className={styles.promotedLinks}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <h3>Promoted Links</h3>
                {promotedLinksArray.map(({ href, Icon, label }, i) => (
                    <motion.a
                        key={i}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.linkContainer}
                        variants={itemVariants}
                        whileHover={listHoverAnimation}
                        whileTap={listTapAnimation}
                    >
                        <Icon />
                        <h3>{label}</h3>
                    </motion.a>
                ))}
            </motion.div>
        </div>
    );
}
