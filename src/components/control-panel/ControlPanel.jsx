import { ExtendedLink } from './componets';
import styles from './control-panel.module.css';

export const ControlPanel = () => (
	<nav className={styles['control-panel']}>
		<ExtendedLink to="/">Главная</ExtendedLink>
		<ExtendedLink to="/services">Услуги</ExtendedLink>
		<ExtendedLink to="/articles">Статьи</ExtendedLink>
		<ExtendedLink to="/forum">Форум</ExtendedLink>
	</nav>
);
