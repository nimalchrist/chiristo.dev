'use client';
import ContactForm from '@/sections/ContactForm/ContactForm';
import { motion } from 'framer-motion';
import styles from './contact.module.scss';

export default function ContactPage() {
  return (
    <div className={styles.contactPage}>
      <h1>Contact Page</h1>
      <h3>If you have any questions, feel free to reach out!</h3>
      <motion.div
        className={styles.formsContainer}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: 'spring',
          stiffness: 100,
          damping: 10,
        }}
      >
        <ContactForm />
      </motion.div>
    </div>
  );
}
