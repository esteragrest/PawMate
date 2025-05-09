import { GreenButton } from '../../content/components/button';
import PropTypes from 'prop-types';
import styles from './service-card.module.css';

export const ServiceCard = ({
	service: {
		id,
		title,
		description,
		photo,
		serviceOwnerFirstName,
		serviceOwnerLastName,
	},
}) => {
	return (
		<div className={styles['service-card-container']}>
			<img className={styles['service-img']} src={photo} alt={title} />
			<div className={styles['service-info']}>
				<h4>{title}</h4>
				<p className={styles.author}>
					{serviceOwnerFirstName} {serviceOwnerLastName || ''}
				</p>
				<p>{description}</p>
				<div className={styles['details-button']}>
					<GreenButton to={`/services/${id}`}>Связаться</GreenButton>
				</div>
			</div>
		</div>
	);
};

ServiceCard.propTypes = {
	service: PropTypes.object.isRequired,
};
