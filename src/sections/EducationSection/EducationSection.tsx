import { getEducationArrayData } from '@/data/homePageData';
import { childVariants, containerVariants } from '@/utils/homePageUtils/animation';
import * as motion from 'motion/react-client';
import styles from './EducationSection.module.scss';

export default function EducationSection() {
  const educationArray = getEducationArrayData();
  return (
    <motion.section
      className={styles.educationSection}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
    >
      <h2 className={styles.title}>Education</h2>
      <div className={styles.educationContainer}>
        {educationArray.map((education, index) => (
          <motion.div
            key={index}
            className={styles.educationItem}
            variants={childVariants}
          >
            <h3 className={styles.educationName}>{education.name}</h3>
            <p className={styles.educationYear}>{education.year}</p>
            <p className={styles.educationDescription}>{education.description}</p>
            <p className={styles.educationInstitution}>{education.institution}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
