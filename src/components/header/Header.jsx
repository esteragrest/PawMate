import { useState } from 'react';
import styles from './header.module.css';
import { Menu, Navbar, ProfileMenu } from './components';
import { ControlPanel } from '../control-panel/ControlPanel';

export const Header = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	};

	return (
		<header className={styles.header}>
			<Navbar />
			<ControlPanel />
			<ProfileMenu toggleMenu={toggleMenu} />
			{menuOpen && <Menu toggleMenu={toggleMenu} />}
		</header>
	);
};
