import styles from './header.module.css';
import { Navbar } from './components/navbar/Navbar';
import { ControlPanel } from '../control-panel/ControlPanel';
import { NavLink } from 'react-router';

export const Header = () => {
	return (
		<header>
			<Navbar />
			<ControlPanel />
			<NavLink className={styles.login} to="/login">
				Вход <img src="/src/assets/images/login.png" alt="login" />
			</NavLink>
		</header>
	);
};
