import PropTypes from 'prop-types';
import { NavLink } from 'react-router';
import styles from './green-button.module.css';

export const GreenButton = ({ to, children }) => {
	return (
		<NavLink className={styles.green} to={to}>
			{children}
		</NavLink>
	);
};

GreenButton.propTypes = {
	to: PropTypes.string,
	children: PropTypes.string,
};
