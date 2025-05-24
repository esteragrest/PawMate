import { Link, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './profile-menu.module.css';
import { useSelector } from 'react-redux';
import { isAuthorized } from '../../../../utils';
import { selectUserRolle } from '../../../../selectors';
import { ControlButton } from '../../../content/components/button';
import { useLogout } from '../../../../hooks';

export const ProfileMenu = ({ toggleMenu }) => {
	const userRole = useSelector(selectUserRolle);
	const onLogout = useLogout();

	const isAuth = isAuthorized(userRole);

	return (
		<div className={styles['profile-menu']}>
			{isAuth ? (
				<div className={styles['user-menu-container']}>
					<div className={styles.avatar}>
						<Link to="/profile/services">
							<img src="/public/img/avatar.jpg" alt="avatar" />
						</Link>
					</div>
					<ControlButton onClick={onLogout}>
						<img src="/public/img/logout.svg" alt="logout" />
					</ControlButton>
				</div>
			) : (
				<NavLink className={styles.login} to="/auth/login">
					Вход <img src="/src/assets/images/login.png" alt="login" />
				</NavLink>
			)}
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
