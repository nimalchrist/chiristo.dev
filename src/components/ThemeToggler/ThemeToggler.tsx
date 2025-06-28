'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import LightIcon from '../../assets/general-icons/lightmode.svg';
import DarkIcon from '../../assets/general-icons/darkmode.svg';
import styles from './ThemeToggler.module.scss';

export default function ThemeToggler() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;

  const isDark = theme === 'dark';
  const next = isDark ? 'light' : 'dark';

  return (
    <button
      className={styles.toggleButton}
      onClick={() => setTheme(next)}
      aria-label={`Switch to ${next} mode`}
      title={`Switch to ${next} mode`}
    >
      {/* Both icons stacked */}
      <LightIcon className={`${styles.icon} ${isDark ? styles.visible : ''}`} />
      <DarkIcon className={`${styles.icon} ${!isDark ? styles.visible : ''}`} />
    </button>
  );
}
