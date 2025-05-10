import { ServiceCard } from './service-card/ServiceCard';
import PropTypes from 'prop-types';
import styles from './services-list.module.css';

export const ServicesList = ({ services }) => {
	return (
		<div className={styles['services-list']}>
			{services.length === 0 ? (
				<h3>Здесь еще нет ни одного объявления :(</h3>
			) : (
				<>
					{services.map((service) => (
						<ServiceCard key={service.id} service={service} />
					))}
				</>
			)}
		</div>
	);
};

ServicesList.propTypes = {
	services: PropTypes.array,
};
