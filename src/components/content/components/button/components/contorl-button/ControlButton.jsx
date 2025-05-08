import PropTypes from 'prop-types';
import styles from './contorl-button.module.css';
import { Link } from 'react-router';

export const ControlButton = ({ img, ...props }) => {
	return (
		<Link className={styles['control-button-container']} {...props}>
			<img className={styles['control-button']} src={img} alt="control-button" />
		</Link>
	);
};

ControlButton.propTypes = {
	img: PropTypes.string.isRequired,
};
