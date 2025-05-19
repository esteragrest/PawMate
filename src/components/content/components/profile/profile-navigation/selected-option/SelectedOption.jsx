import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './selected-option.module.css';

export const SelectedOption = ({ to, children }) => {
	return (
		<NavLink to={to}>
			{({ isActive }) =>
				isActive ? <div className={styles.active}>{children}</div> : children
			}
		</NavLink>
	);
};

SelectedOption.propTypes = {
	to: PropTypes.string.isRequired,
	children: PropTypes.string.isRequired,
};
