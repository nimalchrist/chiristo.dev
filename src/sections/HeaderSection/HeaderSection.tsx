'use client';
import LinkButton from '@/components/Buttons/LinkButton/LinkButton';
import MenuToggler from '@/components/MenuToggler/MenuToggler';
import Navbar from '@/components/NavBar/Navbar';
import ThemeToggler from '@/components/ThemeToggler/ThemeToggler';
import useMobileHeader from '../../hooks/useMobileHeader';
import styles from './HeaderSection.module.scss';
import { mailUrl } from '@/utils/authorsUrls';

export default function HeaderSection() {
  const { isOpen, toggleMenu, closeOnItemClick } = useMobileHeader();
  return (
    <>
      <MenuToggler
        isOpen={isOpen}
        onClick={toggleMenu}
      />
      <section
        className={`${styles.headerSection} ${isOpen ? styles.open : ''}`}
        onClick={closeOnItemClick}
      >
        <Navbar />
        <div className={styles.headerUtils}>
          <ThemeToggler />
          <LinkButton
            href={mailUrl}
            variant="secondary"
          >
            Mail
          </LinkButton>
        </div>
      </section>
    </>
  );
}
