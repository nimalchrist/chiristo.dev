import { getProjectsArrayData } from '@/data/homePageData';
import { childVariants, containerVariants, hoverVariants } from '@/utils/homePageUtils/animation';
import * as motion from 'motion/react-client';
import ReferIcon from '../../assets/general-icons/external-link.svg';
import styles from './ProjectsSection.module.scss';

export default function ProjectsSection() {
  const projectsArray = getProjectsArrayData();
  return (
    <motion.section
      className={styles.projectsSection}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
    >
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projectsContainer}>
        {projectsArray.map((project, index) => (
          <motion.div
            key={index}
            className={styles.projectItem}
            variants={childVariants}
          >
            <motion.h3
              className={styles.projectName}
              whileHover={hoverVariants}
            >
              <a href={project.link}>
                {project.name} <ReferIcon />
              </a>{' '}
            </motion.h3>
            <p className={styles.completionYear}>{project.completionDate}</p>
            <p className={styles.projectDescription}>{project.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
