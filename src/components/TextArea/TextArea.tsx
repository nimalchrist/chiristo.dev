import styles from './TextArea.module.scss';
import { TextAreaProps } from './types';

export default function TextArea({ label, ...props }: TextAreaProps) {
  return (
    <div>
      <div className={styles.inputWrapper}>
        <label
          className={styles.label}
          htmlFor={props.name}
        >
          {label}
        </label>
        <textarea
          className={styles.inputBox}
          {...props}
        />
      </div>
    </div>
  );
}
