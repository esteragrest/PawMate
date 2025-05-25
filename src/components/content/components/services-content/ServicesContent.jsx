import { useEffect, useState } from 'react';
import { ServicesList } from '../../../services-list/ServicesList';
import styles from './services-content.module.css';
import { useMatch } from 'react-router-dom';
import { Service } from './service/Service';
import { request } from '../../../../utils';

export const ServicesContent = () => {
	const [services, setServices] = useState([]);
	const isAllServices = !!useMatch('/services');

	useEffect(() => {
		if (isAllServices) {
			request('/api/services').then((services) => {
				if(services.error) {
					setServices([])
					return
				}

				setServices(services)
			})
		}
	}, [isAllServices]);

	return (
		<div className={styles['services-container']}>
			{isAllServices ? <ServicesList services={services} /> : <Service />}
		</div>
	);
};
