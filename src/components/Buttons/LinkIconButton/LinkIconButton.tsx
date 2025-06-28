import { LinkIconButtonProps } from './types';
import styles from './LinkIconButton.module.scss';


export default function LinkIconButton({ icon, variant = 'primary', ...props }: LinkIconButtonProps) {
  return (
    <span className={`${styles.linkIconButton} ${styles[variant]}`}>
      {icon}
      <a
        {...props}
        href={props.href}
        className={styles.link}
        target="_blank"
        rel={props.rel || 'noopener noreferrer'}
      >
        {props.children}
      </a>
    </span>
  );
}
