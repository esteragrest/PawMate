import { forwardRef } from 'react';
import styles from './input.module.css'

export const Input = forwardRef(({ ...props }, ref) => {
	return <input className={styles.input} ref={ref} {...props} />;
});

Input.displayName = 'Input';
