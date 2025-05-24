import { ControlPanel } from '../control-panel/ControlPanel';
import { Logo } from '../logo/Logo';
import styles from './footer.module.css';

export const Footer = () => {
	return (
		<footer>
			<Logo />
			<div className={styles['control-panel']}>
				<img src="/src/assets/images/paw-icon.png" alt="paw-icon" />
				<ControlPanel />
				<img src="/src/assets/images/paw-icon.png" alt="paw-icon" />
			</div>
			<div className={styles.contact}>
				<p>pawmateoff@gmail.com</p>
				<p>+375333333333</p>
			</div>
		</footer>
	);
};
