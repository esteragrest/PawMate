import { useEffect, useState } from 'react';
import { ServicesList } from '../../../services-list/ServicesList';
import { SERVICES } from './services-data';
import styles from './services.module.css'

export const Services = () => {
	const [services, setServices] = useState([]);

	useEffect(() => {
		setServices(SERVICES);
	}, []);

	return (
		<div className={styles['services-container']}>
			<ServicesList services={services} />;
		</div>
	);
};
