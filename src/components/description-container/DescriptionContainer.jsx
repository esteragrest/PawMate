import { GreenButton } from '../content/components/button';
import PropTypes from 'prop-types';
import styles from './description-container.module.css';
import { Link } from 'react-router-dom';

export const DescriptionContainer = ({ title, description, buttonText, to }) => {
	return (
		<div className={styles['description-container']}>
			<h3>{title}</h3>
			<p>{description}</p>
			<GreenButton>
				<Link to={to}>{buttonText}</Link>
			</GreenButton>
		</div>
	);
};

DescriptionContainer.propTypes = {
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	buttonText: PropTypes.string.isRequired,
	to: PropTypes.string.isRequired,
};
