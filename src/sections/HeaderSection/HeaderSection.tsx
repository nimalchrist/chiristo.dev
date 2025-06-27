import Navbar from '@/components/NavBar/Navbar';
import style from './HeaderSection.module.scss';
import ThemeToggler from '@/components/ThemeToggler/ThemeToggler';

export default function HeaderSection() {
  return (
    <>
      <section className={style.headerSection}>
        <Navbar />
        <ThemeToggler />
      </section>
    </>
  );
}
