import PropTypes from 'prop-types';
import styles from './contorl-button.module.css';

export const ControlButton = ({ children, ...props }) => {
	return (
		<button className={styles['control-button-container']} {...props}>
			{children}
		</button>
	);
};

ControlButton.propTypes = {
	children: PropTypes.node.isRequired,
};
