import PropTypes from 'prop-types';
import styles from './capabilityItem.module.css';

export const CapabilityItem = ({ capability }) => {
	return (
		<div className={styles.capability}>
			<div className={styles['capability-img']}>
				<img src={capability.img} alt="capability" />
			</div>
			<h3>{capability.title}</h3>
			<p>{capability.description}</p>
		</div>
	);
};

CapabilityItem.propTypes = {
	capability: PropTypes.object,
};
