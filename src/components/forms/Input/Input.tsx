// ** Imports do React
import React from "react";

// ** Imports de estilos
import styles from "./Input.module.css";

// ** Imports de pacotes
import { Field, ErrorMessage } from "formik";

export interface InputProps<T = HTMLInputElement> {
  label: string;
  name: string;
  type?: string;
  as?: string;
  errors?: string;
  touched?: boolean;
  className?: string;
  children?: React.ReactNode;
  onChange?: (event: React.ChangeEvent<T>) => void;
}

const Input: React.FC<InputProps> = ({ label, name, type = "text", as, errors, touched, children, className, onChange }) => {
  return (
    <fieldset className={styles.formGroup}>
      <label htmlFor={name} className={styles.label}>
        {label}:
      </label>
      <Field
        name={name}
        type={type}
        as={as ? as : undefined}
        className={`${className ? className : styles.input} ${touched && errors && styles.error}`}
        onChange={onChange}
      >
        {children}
      </Field>
      <ErrorMessage name={name} component="div" className={styles.errorMsg} />
    </fieldset>
  );
};

export default Input;
