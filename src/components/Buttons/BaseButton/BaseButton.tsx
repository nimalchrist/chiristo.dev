import styles from './BaseButton.module.scss';
import { BaseButtonProps } from './types';

export default function BaseButton({
  variant = 'primary',
  className = '',
  ...props
}: BaseButtonProps) {
  return (
    <button
      {...props}
      className={`${styles.baseButton} ${styles[variant]} ${className}`}
      disabled={props.disabled}
    />
  );
}
