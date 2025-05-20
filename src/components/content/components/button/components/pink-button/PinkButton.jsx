import PropTypes from 'prop-types';
import styles from './pink-button.module.css';

export const PinkButton = ({ children, ...props }) => {
	return (
		<button className={styles.pink} {...props}>
			{children}
		</button>
	);
};

PinkButton.propTypes = {
	children: PropTypes.string,
};
