import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './green-button.module.css';

export const GreenButton = ({ to, children }) => {
	return (
		<Link className={styles.green} to={to}>
			{children}
		</Link>
	);
};

GreenButton.propTypes = {
	to: PropTypes.string,
	children: PropTypes.string,
};
