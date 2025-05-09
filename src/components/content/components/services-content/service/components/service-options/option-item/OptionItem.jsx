import PropTypes from 'prop-types';
import styles from './option-item.module.css';

export const OptionItem = ({ optionName, description }) => {
	return (
		<div className={styles['option-item-container']}>
			<h4>{optionName}</h4>
			<p>{description}</p>
		</div>
	);
};

OptionItem.propTypes = {
	optionName: PropTypes.string.isRequired,
	description: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
