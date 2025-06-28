import { useCallback, useState } from 'react';

export default function useMobileHeader() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const closeOnItemClick = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLElement;
    if (target.closest('a, button')) {
      setIsOpen(false);
    }
  }, []);
  return { isOpen, toggleMenu, closeOnItemClick };
}
