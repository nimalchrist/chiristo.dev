import MenuIcon from '@/assets/general-icons/openMenu.svg';
import CloseIcon from '@/assets/general-icons/closeMenu.svg';
import styles from './MenuToggler.module.scss';
import { MenuTogglerProps } from './types';

export default function MenuToggler({ isOpen, onClick, ...props }: MenuTogglerProps) {
  return (
    <button
      {...props}
      className={styles.fab}
      onClick={onClick}
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
    >
      {isOpen ? <CloseIcon /> : <MenuIcon />}
    </button>
  );
}
