import { getSkillsArrayData } from '@/data/homePageData';
import { childVariants, containerVariants, hoverVariants } from '@/utils/homePageUtils/animation';
import * as motion from 'motion/react-client';
import styles from './SkillsSection.module.scss';

export default function SkillsSection() {
  const skillArray = getSkillsArrayData();

  return (
    <motion.section
      className={styles.skillsSection}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
    >
      <h2 className={styles.title}>Skills</h2>
      <div className={styles.skillsContainer}>
        {skillArray.map((skill, index) => (
          <motion.div
            className={styles.skill}
            key={index}
            variants={childVariants}
            whileHover={hoverVariants}
          >
            <skill.Icon />
            <h4 className={styles.skillName}>
              <a
                href={skill.link}
                target="_blank"
              >
                {skill.name}
              </a>
            </h4>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
