import PropTypes from 'prop-types';
import { NavLink } from 'react-router';
import styles from './pink-button.module.css';

export const PinkButton = ({ to, children }) => {
	return (
		<NavLink className={styles.pink} to={to}>
			{children}
		</NavLink>
	);
};

PinkButton.propTypes = {
	to: PropTypes.string,
	children: PropTypes.string,
};
