'use client';

import Link from 'next/link';
import style from './Navbar.module.scss';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const getClassName = (href: string) => {
    const isActive = pathname === href || (href !== '/' && pathname.startsWith(href));
    return isActive ? `${style.navlink} ${style.active}` : style.navlink;
  };

  return (
    <div className={style.navbar}>
      <Link
        href="/"
        className={getClassName('/')}
      >
        Home
      </Link>
      <Link
        href="/contact"
        className={getClassName('/contact')}
      >
        Contact
      </Link>
      <Link
        href="/links"
        className={getClassName('/links')}
      >
        Links
      </Link>
    </div>
  );
}
