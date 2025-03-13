import { ExtendedLink } from '../../../extended-link/ExtendedLink';
import PropTypes from 'prop-types';
import styles from './menu.module.css';

export const Menu = ({ toggleMenu }) => {
	return (
		<div className={styles.menu}>
			<img
				src="/src/assets/images/cros.svg"
				alt="cros"
				className={styles.cross}
				onClick={toggleMenu}
			/>
			<div className={styles.links}>
				<ExtendedLink to="/">Главная</ExtendedLink>
				<ExtendedLink to="/services">Услуги</ExtendedLink>
				<ExtendedLink to="/articles">Статьи</ExtendedLink>
				<ExtendedLink to="/forum">Форум</ExtendedLink>
			</div>
		</div>
	);
};

Menu.propTypes = {
	toggleMenu: PropTypes.func,
};
