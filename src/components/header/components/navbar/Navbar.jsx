import { useNavigate } from 'react-router';
import styles from './navbar.module.css';
import { Logo } from '../../../logo/Logo';

export const Navbar = () => {
	const navigate = useNavigate();

	return (
		<div className={styles.navbar}>
			<button className={styles.navigate} onClick={() => navigate(-1)}>
				<img src="/src/assets/images/back.png" alt="arrow-back" />
			</button>
			<Logo />
			<button className={styles.navigate} onClick={() => navigate(+1)}>
				<img src="/src/assets/images/forward.png" alt="arrow-forward" />
			</button>
		</div>
	);
};
