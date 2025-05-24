import PropTypes from 'prop-types';
import styles from './error-message.module.css';

export const ErrorMessage = ({ children }) => {
	return (
		<div className={styles['error-message']}>
			<p>{children}</p>
		</div>
	);
};

ErrorMessage.propTypes = {
	children: PropTypes.string.isRequired,
};
