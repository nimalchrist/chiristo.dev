import { LinkButtonProps } from './types';
import styles from './LinkButton.module.scss';

export default function LinkButton({ variant = 'primary', ...props }: LinkButtonProps) {
  return (
    <span>
      {/* TODO: add dynamic icon */}
      <a
        {...props}
        className={`${styles.linkButton} ${styles[variant]}`}
        href={props.href}
        target="_blank"
        rel={props.rel || 'noopener noreferrer'}
      >
        {props.children}
      </a>
    </span>
  );
}
