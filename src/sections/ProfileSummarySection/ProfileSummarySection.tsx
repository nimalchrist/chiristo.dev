import { getProfileSummaryDetails } from '@/data/homePageData';
import getEmailRegex from '@/utils/homePageUtils/getEmailRegex';
import Image from 'next/image';
import styles from './ProfileSummarySection.module.scss';
import * as motion from 'motion/react-client';
import {
  normalFadeInAnimation,
  profileNameContainerVariants,
  wordVariants,
} from '@/utils/homePageUtils/animation';

export default function ProfileSummarySection() {
  const { name, role, summary } = getProfileSummaryDetails();
  const emailRegex = getEmailRegex();
  const parts = summary.split(emailRegex);
  const words = name.split(' ');

  return (
    <section className={styles.profileSummarySection}>
      <div className={styles.profileDetails}>
        <motion.h1
          className={styles.name}
          variants={profileNameContainerVariants}
          initial="hidden"
          animate="visible"
        >
          {words.map((word, index) => (
            <motion.span
              key={index}
              variants={wordVariants}
              style={{ display: 'inline-block', marginRight: '0.3em' }}
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          className={styles.role}
          variants={normalFadeInAnimation}
          initial="hidden"
          animate="visible"
        >
          {role}
        </motion.p>

        <motion.p
          className={styles.content}
          variants={normalFadeInAnimation}
          initial="hidden"
          animate="visible"
        >
          {parts.map((part, i) =>
            emailRegex.test(part) ? (
              <a
                key={i}
                href={`mailto:${part}`}
                className="email-link"
              >
                {part}
              </a>
            ) : (
              part
            ),
          )}
        </motion.p>
      </div>

      <motion.div
        className={styles.profileImageContainer}
        variants={normalFadeInAnimation}
        initial="hidden"
        animate="visible"
      >
        <Image
          src="/images/chiristo-bw.jpeg"
          alt="Profile"
          fill
          priority
        />
      </motion.div>
    </section>
  );
}
