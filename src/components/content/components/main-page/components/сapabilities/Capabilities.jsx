import { capabilities } from './data';
import { CapabilityItem } from './components/CapabilityItem';
import styles from './capabilities.module.css';

export const Capabilities = () => {
	return (
		<div className={styles.container}>
			<h2>
				Что вы можете делать на <span className={styles.highlight}>PawMate</span>?
			</h2>
			<div className={styles.capabilities}>
				{capabilities.map((capability) => (
					<CapabilityItem key={capability.id} capability={capability} />
				))}
			</div>
		</div>
	);
};
