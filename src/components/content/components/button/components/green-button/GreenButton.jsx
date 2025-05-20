import PropTypes from 'prop-types';
import styles from './green-button.module.css';

export const GreenButton = ({ children, ...props }) => {
	return (
		<button className={styles.green} {...props}>
			{children}
		</button>
	);
};

GreenButton.propTypes = {
	children: PropTypes.string,
};
