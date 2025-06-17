'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

// TODO: should rework on this UI
export default function ThemeToggler() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      Switch to {theme === 'dark' ? 'light' : 'dark'} mode
    </button>
  );
}
