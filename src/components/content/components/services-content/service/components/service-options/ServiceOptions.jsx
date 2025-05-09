import PropTypes from 'prop-types';
import { OptionItem } from './option-item/OptionItem';
import styles from './service-options.module.css';

export const ServiceOptions = ({ options }) => {
	return (
		<div className={styles['service-options-container']}>
			{options.map(({ optionName, description }, index) => (
				<OptionItem
					key={index}
					optionName={optionName}
					description={description}
				/>
			))}
		</div>
	);
};

ServiceOptions.propTypes = {
	options: PropTypes.arrayOf(
		PropTypes.shape({
			optionName: PropTypes.string.isRequired,
			description: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
		}),
	).isRequired,
};
