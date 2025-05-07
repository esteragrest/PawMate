import { GreenButton } from '../content/components/button';
import PropTypes from 'prop-types';
import styles from './description-container.module.css';

export const DescriptionContainer = ({ title, description, buttonText, to }) => {
	return (
		<div className={styles['description-container']}>
			<h3>{title}</h3>
			<p>{description}</p>
			<GreenButton to={to}>{buttonText}</GreenButton>
		</div>
	);
};

DescriptionContainer.propTypes = {
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	buttonText: PropTypes.string.isRequired,
	to: PropTypes.string.isRequired,
};
