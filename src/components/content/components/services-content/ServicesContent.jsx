import { useEffect, useState } from 'react';
import { ServicesList } from '../../../services-list/ServicesList';
import { SERVICES } from './services-data';
import styles from './services-content.module.css';
import { useMatch } from 'react-router';
import { Service } from './service/Service';

export const ServicesContent = () => {
	const [services, setServices] = useState([]);
	const isAllServices = !!useMatch('/services');

	useEffect(() => {
		if (isAllServices) {
			setServices(SERVICES);
		}
	}, [isAllServices]);

	return (
		<div className={styles['services-container']}>
			{isAllServices ? <ServicesList services={services} /> : <Service />}
		</div>
	);
};
