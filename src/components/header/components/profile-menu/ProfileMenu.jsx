import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './profile-menu.module.css';

export const ProfileMenu = ({ toggleMenu }) => {
	return (
		<div className={styles['profile-menu']}>
			<NavLink className={styles.login} to="/auth/login">
				Вход <img src="/src/assets/images/login.png" alt="login" />
			</NavLink>
			<div className={styles.burgerMenu} onClick={toggleMenu}>
				<div className={styles.burgerLine}></div>
				<div className={styles.burgerLine}></div>
				<div className={styles.burgerLine}></div>
			</div>
		</div>
	);
};

ProfileMenu.propTypes = {
	toggleMenu: PropTypes.func,
};
