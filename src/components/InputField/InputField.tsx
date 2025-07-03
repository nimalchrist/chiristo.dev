import React from 'react';
import styles from './InputField.module.scss';
import { InputFieldProps } from './types';

const InputField = ({ label, type = 'text', ...props }: InputFieldProps) => {
  return (
    <div className={styles.inputWrapper}>
      <label
        className={styles.label}
        htmlFor={props.name}
      >
        {label}
      </label>
      <input
        className={styles.inputBox}
        type={type}
        id={props.name}
        {...props}
      />
    </div>
  );
};

export default InputField;
