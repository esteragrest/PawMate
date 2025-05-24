import { useOutletContext } from 'react-router-dom';
import { ServicesList } from '../../../services-list/ServicesList';
import styles from './user-service.module.css';

export const UserServices = () => {
	const { userServices } = useOutletContext();

	return userServices.length === 0 ? (
		<h3 className={styles['not-found']}>Здесь пока еще нет записей</h3>
	) : (
		<ServicesList services={userServices} />
	);
};
