import styles from './LinkButton.module.scss';
import { LinkButtonProps } from './types';


export default function LinkButton({ variant = 'primary', ...props }: LinkButtonProps) {
  return (
    <span className={`${styles.linkButton} ${styles[variant]}`}>
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
