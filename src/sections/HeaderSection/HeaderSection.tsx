'use client';
import LinkIconButton from '@/components/Buttons/LinkIconButton/LinkIconButton';
import MenuToggler from '@/components/MenuToggler/MenuToggler';
import Navbar from '@/components/NavBar/Navbar';
import ThemeToggler from '@/components/ThemeToggler/ThemeToggler';
import { mailUrl } from '@/utils/authorsUrls';
import MailIcon from '../../assets/social-icons/mailto.svg';
import useMobileHeader from '../../hooks/useMobileHeader';
import styles from './HeaderSection.module.scss';

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
          <LinkIconButton
            icon={<MailIcon />}
            href={mailUrl}
            variant="secondary"
          >
            Mail
          </LinkIconButton>
        </div>
      </section>
    </>
  );
}
